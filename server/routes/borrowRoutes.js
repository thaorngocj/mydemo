const express = require("express");
const router = express.Router();
const borrowController = require("../controllers/borrowController");
const { protect } = require("../middleware/authMiddleware"); 

// Borrow book
router.post("/", protect, borrowController.borrowBook);

// Return book
router.put("/return/:id", protect, borrowController.returnBook);

// Get my borrows
router.get("/my-borrows", protect, borrowController.getMyBorrows);

// Get all borrows (admin)
router.get("/", protect, borrowController.getAllBorrows);

module.exports = router;