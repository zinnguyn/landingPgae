const express = require("express");
const session = require("express-session"); // ⚠️ Đặt ở đầu để dễ nhìn
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware parse body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cấu hình session - đặt trước khi dùng trong các route
app.use(
  session({
    secret: "admin-secret-key", // 🔒 Bạn có thể lưu secret này trong biến môi trường
    resave: false,
    saveUninitialized: false,
  })
);

// Serve static files từ thư mục 'publics'
app.use(express.static("publics"));

// Thiết lập view engine EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Import routes
const homeRoutes = require("./routes/index");
const experienceRoutes = require("./routes/index1");
const customerRoutes = require("./routes/customers");
const adminRoutes = require("./routes/admin");

// Gán routes
app.use("/", homeRoutes); // Trang chủ
app.use("/landingPages1", experienceRoutes); // Landing page phụ
app.use("/", customerRoutes); // Gửi form khách hàng
app.use("/admin", adminRoutes); // Admin CMS

// Route test popup (tuỳ chọn)
app.get("/popup", (req, res) => {
  res.render("popup");
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
