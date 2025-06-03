const pool = require("../config/db");

// Trang đăng nhập admin
exports.loginPage = (req, res) => {
  res.render("admin/login", { error: null });
};

// Xử lý đăng nhập
exports.handleLogin = (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "123456") {
    req.session.adminLoggedIn = true;
    res.redirect("/admin/customers");
  } else {
    res.render("admin/login", { error: "Sai tài khoản hoặc mật khẩu" });
  }
};

// Đăng xuất admin
exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/admin/login");
  });
};

// Hiển thị danh sách khách hàng
exports.showCustomers = async (req, res) => {
  try {
    const [customers] = await pool.query("SELECT * FROM customers");
    res.render("admin/customers", { customers });
  } catch (err) {
    console.error("Lỗi truy vấn CSDL:", err);
    res.status(500).send("Lỗi lấy danh sách khách hàng");
  }
};

// Cập nhật trạng thái đã tư vấn
exports.updateConsultedStatus = async (req, res) => {
  const customerId = req.params.id;
  const consulted = req.body.consulted === "1" ? 1 : 0;

  try {
    await pool.query("UPDATE customers SET consulted = ? WHERE id = ?", [
      consulted,
      customerId,
    ]);
    res.redirect("/admin/customers");
  } catch (err) {
    console.error("Lỗi cập nhật trạng thái:", err);
    res.status(500).send("Lỗi cập nhật trạng thái tư vấn");
  }
};
