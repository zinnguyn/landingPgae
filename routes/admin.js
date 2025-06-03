const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const auth = require("../middlewares/auth");

router.get("/login", adminController.loginPage);
router.post("/login", adminController.handleLogin);
router.get("/logout", adminController.logout);

// Trang chính /admin → chuyển sang dashboard
router.get("/", auth, (req, res) => {
  res.redirect("/admin/customers");
});

// Trang danh sách khách hàng (bảo vệ đăng nhập)
router.get("/customers", auth, adminController.showCustomers);

// Cập nhật trạng thái tư vấn khách hàng
router.post(
  "/customers/:id/consulted",
  auth,
  adminController.updateConsultedStatus
);

module.exports = router;
