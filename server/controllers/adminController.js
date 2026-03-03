const Borrow = require("../models/Borrow");
const Book = require("../models/Book");
const User = require("../models/User");

exports.getDashboardStats = async (req, res) => {
  try {
    const now = new Date();
    const twoDaysLater = new Date();
    twoDaysLater.setDate(now.getDate() + 2);

    // Tổng borrow theo status
    const borrowStats = await Borrow.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 }
        }
      }
    ]);

    const stats = {
      totalBorrows: 0,
      borrowed: 0,
      returned: 0,
      overdue: 0
    };

    borrowStats.forEach(item => {
      stats.totalBorrows += item.count;
      stats[item._id] = item.count;
    });

    // Sắp đến hạn (trong 2 ngày)
    const dueSoon = await Borrow.find({
      status: "borrowed",
      dueDate: { $gte: now, $lte: twoDaysLater }
    })
      .populate("user", "name email")
      .populate("book", "title");

    // Top 5 sách mượn nhiều nhất
    const topBooks = await Borrow.aggregate([
      {
        $group: {
          _id: "$book",
          totalBorrowed: { $sum: "$quantity" }
        }
      },
      { $sort: { totalBorrowed: -1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "book"
        }
      },
      { $unwind: "$book" },
      {
        $project: {
          title: "$book.title",
          totalBorrowed: 1
        }
      }
    ]);

    // Low stock alert (<5 cuốn)
    const lowStockBooks = await Book.find({
      availableQuantity: { $lt: 5 }
    }).select("title availableQuantity");

    res.json({
      stats,
      dueSoon,
      topBooks,
      lowStockBooks
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
