const profileToggle = document.getElementById("profileToggle");
const profileDropdown = document.getElementById("profileDropdown");

// Toggle show - Profile
profileToggle.addEventListener("click", function (e) {
  profileDropdown.classList.toggle("show");
  e.stopPropagation();
});

// Close dropdown
document.addEventListener("click", function () {
  profileDropdown.classList.remove("show");
});

// Swiper JS Landscape
document
  .querySelectorAll(".slider-container-landscape")
  .forEach((container) => {
    new Swiper(container, {
      spaceBetween: 10, // Kurangi spasi untuk layar kecil
      grabCursor: true,
      loop: true,
      slidesPerView: "auto", // Gunakan 'auto' agar lebar slide fleksibel
      navigation: {
        nextEl: container.querySelector(".swiper-button-next"),
        prevEl: container.querySelector(".swiper-button-prev"),
      },
      // Breakpoints untuk layar lebih besar
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  });

// Swiper JS Portrait
document.querySelectorAll(".slider-container-portrait").forEach((container) => {
  new Swiper(container, {
    spaceBetween: 10, // Kurangi spasi untuk layar kecil
    grabCursor: true,
    loop: true,
    slidesPerView: "auto", // Gunakan 'auto' agar lebar slide fleksibel
    navigation: {
      nextEl: container.querySelector(".swiper-button-next"),
      prevEl: container.querySelector(".swiper-button-prev"),
    },
    // Breakpoints untuk layar lebih besar
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
});
