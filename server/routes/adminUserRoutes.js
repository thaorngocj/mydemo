const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const {
  getAllUsers,
  getUserById,
  updateUser,
  updateUserRole,
  toggleUserStatus,
  deleteUser
} = require("../controllers/adminUserController");

router.use(protect, authorize("admin"));

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/stats", getUserStats);
router.put("/:id", updateUser);
router.patch("/:id/role", updateUserRole);
router.patch("/:id/toggle-status", toggleUserStatus);
router.delete("/:id", deleteUser);


module.exports = router;