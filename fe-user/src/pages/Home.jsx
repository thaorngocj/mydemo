import { useEffect, useState } from "react";
import API from "../services/api";
import BookCard from "../components/BookCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.get("/books")
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-[#FBEFEF] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 pb-20">

          {/* ================= HERO ================= */}
          <div
            className="mt-6 rounded-xl py-20 text-center"
            style={{
              background: "linear-gradient(90deg, #FBE6E4 27%, #FCECD9 100%)"
            }}
          >
            <h1 className="text-4xl font-bold mb-4">
              Chào mừng đến với Book Haven
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Khám phá thế giới tri thức với hàng nghìn đầu sách chất lượng.
              Mua sách, mượn sách và tận hưởng không gian đọc sách lý tưởng.
            </p>
          </div>

          {/* ================= SÁCH HOT ================= */}
          <h2 className="text-2xl font-bold mt-16 mb-6">
            🔥 Sách hot
          </h2>

          <div className="grid grid-cols-4 gap-8">
            {books
              .filter(book => book.isHot)
              .map(book => (
                <BookCard key={book._id} book={book} />
              ))}
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button className="bg-[#CF364C] text-white px-6 py-2 rounded-lg">
              Xem thêm (Mua) →
            </button>

            <button className="bg-[#3662E3] text-white px-6 py-2 rounded-lg">
              Xem thêm (Mượn) →
            </button>
          </div>

          {/* ================= VĂN HỌC ================= */}
          <h2 className="text-2xl font-bold mt-16 mb-2">
            📖 Văn học
          </h2>

          <p className="text-gray-500 mb-6">
            Sách văn học trong và ngoài nước
          </p>

          <div className="grid grid-cols-4 gap-8">
            {books
              .filter(book => book.category === "Văn học")
              .map(book => (
                <BookCard key={book._id} book={book} />
              ))}
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button className="bg-[#CF364C] text-white px-6 py-2 rounded-lg">
              Xem thêm (Mua) →
            </button>

            <button className="bg-[#3662E3] text-white px-6 py-2 rounded-lg">
              Xem thêm (Mượn) →
            </button>
          </div>

          {/* ================= KINH TẾ ================= */}
          <h2 className="text-2xl font-bold mt-16 mb-2">
            📊 Kinh tế
          </h2>

          <p className="text-gray-500 mb-6">
            Sách về kinh tế, kinh doanh
          </p>

          <div className="grid grid-cols-4 gap-8">
            {books
              .filter(book => book.category === "Kinh tế")
              .map(book => (
                <BookCard key={book._id} book={book} />
              ))}
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button className="bg-[#CF364C] text-white px-6 py-2 rounded-lg">
              Xem thêm (Mua) →
            </button>

            <button className="bg-[#3662E3] text-white px-6 py-2 rounded-lg">
              Xem thêm (Mượn) →
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}