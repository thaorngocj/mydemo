const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

// Public (user + admin)
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);

// Admin only
router.post("/", protect, authorize("admin"), bookController.createBook);
router.put("/:id", protect, authorize("admin"), bookController.updateBook);
router.delete("/:id", protect, authorize("admin"), bookController.deleteBook);

module.exports = router;