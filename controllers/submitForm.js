exports.submitContact = (req, res) => {
  const { name, phone, designType, message } = req.body;

  // Kiểm tra nếu thiếu dữ liệu thì có thể xử lý hoặc trả về lỗi, hoặc default giá trị
  res.render("submitForm", {
    name: name || "Chưa nhập",
    phone: phone || "Chưa nhập",
    designType: designType || "Chưa chọn",
    message: message || "",
  });
};
