const express = require("express");
const router = express.Router();
const { protect, authorizeAdmin } = require("../middleware/authMiddleware");
const { getDashboardStats } = require("../controllers/adminController");

router.get("/dashboard", protect, authorizeAdmin, getDashboardStats);

module.exports = router;