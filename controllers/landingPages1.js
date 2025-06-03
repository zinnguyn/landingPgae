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
    landingPages1,
  });
};
