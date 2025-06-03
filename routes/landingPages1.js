const db = require("../config/db");

exports.submitContact = (req, res) => {
  const { name, phone, designType, message } = req.body;

  // Nếu thiếu dữ liệu bắt buộc thì trả lỗi đơn giản
  if (!name || !phone || !designType) {
    return res.status(400).send("Vui lòng nhập đầy đủ thông tin bắt buộc.");
  }

  // Lưu vào cơ sở dữ liệu
  const sql =
    "INSERT INTO customers (name, phone, designType, message) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, phone, designType, message], (err, result) => {
    if (err) {
      console.error("Lỗi ghi vào DB:", err);
      return res.status(500).send("Lỗi khi lưu thông tin.");
    }

    // Hiển thị lại thông tin đã gửi
    res.render("submitForm", {
      name,
      phone,
      designType,
      message,
    });
  });
};
