const landingPages = [
  {
    image: "/img/Mypham.png",
    category: "MỸ PHẨM",
    title: "THƯƠNG HIỆU JUNGNANI",
    description: "Đẩy mạnh doanh thu bán hàng trên landing page + ads",
  },
  {
    image: "/img/daugoi.png",
    category: "DẦU GỘI",
    title: "THƯƠNG HIỆU LACO",
    description: "Đẩy mạnh doanh thu bán hàng trên landing page + ads",
  },
  {
    image: "/img/khaitruong.png",
    category: "KHAI TRƯƠNG",
    title: "CỬA HÀNG LAPVIP",
    description: "Chương trình khai trương cửa hàng",
  },
  {
    image: "/img/nhakhoa.png",
    category: "NHA KHOA",
    title: "THƯƠNG HIỆU BRIDENTAL",
    description: "Gia tăng nhận diện thương hiệu, mức độ cạnh tranh",
  },
  {
    image: "/img/quatetpng.png",
    category: "QUÀ TẾT",
    title: "THƯƠNG HIỆU FRESH GARDEN",
    description: "Bùng nổ doanh số bán hàng dịp tết",
  },
  {
    image: "/img/sua.png",
    category: "SỮA",
    title: "SICASURE - SỮA TĂNG CHIỀU CAO",
    description: "Tăng sự tin tưởng với thiết kế chuyên nghiệp",
  },
  {
    image: "/img/ungdung.png",
    category: "ỨNG DỤNG",
    title: "HỌC TIẾNG ANH - FUTURELANG",
    description: "Giới thiệu ứng dụng học tiếng Anh",
  },
  {
    image: "/img/batdongsan.png",
    category: "BẤT ĐỘNG SẢN",
    title: "DỰ ÁN SELAVIA PHÚ QUỐC",
    description: "Thu hút khách hàng tiềm năng ngành BĐS",
  },
  {
    image: "/img/daotao.png",
    category: "ĐÀO TẠO",
    title: "CHEUDA ACCADEMY VIỆT NAM",
    description: "Thu hút học viên cho khóa đào tạo",
  },
];

const landingPages1 = [
  {
    image: "/img/sach.jpg",
    category: "ỨNG DỤNG",
    title: "HỌC TIẾNG ANH - FUTURELANG",
    description: "Giới thiệu ứng dụng học tiếng Anh",
  },
  {
    image: "/img/kemchongnang.jpg",
    category: "BÁN HÀNG",
    title: "CHEUDA ACCADEMY VIỆT NAM",
    description: "Thu hút học viên cho khóa đào tạo",
  },
  {
    image: "/img/phongkham.jpg",
    category: "DOANH NGHIỆP",
    title: "HỌC TIẾNG ANH - FUTURELANG",
    description: "Giới thiệu ứng dụng học tiếng Anh",
  },
  {
    image: "/img/sukien.jpg",
    category: "SỰ KIỆN",
    title: "CHEUDA ACCADEMY VIỆT NAM",
    description: "Thu hút học viên cho khóa đào tạo",
  },
];

exports.getHomePage = (req, res) => {
  res.render("home", {
    title: "Landing Page Trải nghiệm",
    landingPages,
    landingPages1,
  });
};
