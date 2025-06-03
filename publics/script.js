// -- MENU TOGGLE --
const divPoup = document.querySelector("nav .menu");
const divTrigger = document.querySelector(".m-trigger");

divTrigger?.addEventListener("click", () => {
  setTimeout(() => {
    divPoup.classList.toggle("show");
    document.body.classList.toggle("menu-visible");
  }, 250);
});

document.addEventListener("click", (e) => {
  if (!e.target.closest("nav .menu") && !e.target.closest(".m-trigger")) {
    divPoup.classList.remove("show");
    document.body.classList.remove("menu-visible");
  }
});

// -- MOBILE MENU TOGGLE --
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

toggle?.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("show");
});

// -- SEARCH TOGGLE --
function toggleSearch() {
  document.body.classList.toggle("showsearch");

  const searchIcon = document.getElementById("search-icon");
  const closeIcon = document.getElementById("close-icon");

  const isVisible = document.body.classList.contains("showsearch");
  searchIcon.style.display = isVisible ? "none" : "inline";
  closeIcon.style.display = isVisible ? "inline" : "none";
}

// ----- SLIDER THUMBNAIL (NAV) -----
const thumbSwiper = new Swiper(".thumb-nav", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: false, // Bỏ vòng lặp để dễ dàng kiểm soát bullets
  watchSlidesProgress: true,
  slideToClickedSlide: true,
  pagination: {
    el: ".swiper-pagination-thumbs", // Chỉ định phần tử chứa bullets
    clickable: true,
  },
  breakpoints: {
    0: { direction: "horizontal", spaceBetween: 6 },
    768: { direction: "horizontal", spaceBetween: 8 },
    992: { direction: "vertical", spaceBetween: 12 },
  },
});

// ----- SLIDER CHÍNH (ẢNH TO) -----
const theSlider = new Swiper(".thumb-big", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  thumbs: {
    swiper: thumbSwiper, // Liên kết thumbnail với slider chính
  },
});

// Khởi tạo Swiper cho tab navigation
const tabbedNav = new Swiper(".tnav", {
  slidesPerView: 6, // Hiển thị 6 tab cùng lúc
  spaceBetween: 20, // Khoảng cách giữa các tab
  centeredSlides: false, // Không cần trung tâm
  loop: false, // Không sử dụng vòng lặp
  watchSlidesProgress: true, // Theo dõi tiến trình của các slide
  slideToClickedSlide: true, // Nhảy đến slide khi nhấn
  grabCursor: true, // Hiển thị con trỏ kéo
});

// Khởi tạo Swiper cho phần sản phẩm với autoplay
const theTab = new Swiper(".tabbed-item", {
  slidesPerView: 1, // Hiển thị 1 sản phẩm
  spaceBetween: 10, // Khoảng cách giữa các sản phẩm
  autoHeight: true, // Tự động điều chỉnh chiều cao
  loop: true, // Cho phép vòng lặp
  autoplay: {
    delay: 3000, // Thời gian chuyển đổi giữa các slide (3 giây)
    disableOnInteraction: false, // Tiếp tục autoplay sau khi người dùng tương tác
  },
  thumbs: {
    swiper: tabbedNav, // Liên kết thumbnail với slider chính
  },
  grabCursor: true, // Hiển thị con trỏ kéo
});

// Lắng nghe sự kiện nhấp vào các tab
const tabLinks = document.querySelectorAll(".tnav .swiper-slide a");

tabLinks.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Ngăn chặn hành động mặc định
    theTab.slideTo(index); // Nhảy đến slide tương ứng khi nhấp vào tab
  });
});

// Xử lý sự kiện cho nút "Like"
const likeButtons = document.querySelectorAll(".products .meta .like");

likeButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    this.classList.toggle("active"); // Thay đổi lớp 'active' khi nhấn
  });
});
