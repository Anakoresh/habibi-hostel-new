document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector("#rooms-adaptive .main-slide");
    const slides = document.querySelectorAll("#rooms-adaptive .slide");
    const prevBtn = document.querySelector("#rooms-adaptive .nav-btn.prev");
    const nextBtn = document.querySelector("#rooms-adaptive .nav-btn.next");
    let currentIndex = 0;

    function updateSlide() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlide();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlide();
    });

    // Touch swipe
    let startX = 0;
    slider.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", (e) => {
      let endX = e.changedTouches[0].clientX;
      let diff = startX - endX;

      if (diff > 50) {
        // swipe left
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide();
      } else if (diff < -50) {
        // swipe right
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide();
      }
    });

    const sliderAreas = document.querySelector("#areas-adaptive .main-slide");
    const slidesAreas = document.querySelectorAll("#areas-adaptive .slide");
    const prevBtnAreas = document.querySelector("#areas-adaptive .nav-btn.prev");
    const nextBtnAreas = document.querySelector("#areas-adaptive .nav-btn.next");
    let currentIndexAreas = 0;

    function updateSlideAreas() {
      sliderAreas.style.transform = `translateX(-${currentIndexAreas * 100}%)`;
    }

    prevBtnAreas.addEventListener("click", () => {
      currentIndexAreas = (currentIndexAreas - 1 + slidesAreas.length) % slidesAreas.length;
      updateSlideAreas();
    });

    nextBtnAreas.addEventListener("click", () => {
      currentIndexAreas = (currentIndexAreas + 1) % slidesAreas.length;
      updateSlideAreas();
    });

    // Touch swipe
    let startXAreas = 0;
    sliderAreas.addEventListener("touchstart", (e) => {
      startXAreas = e.touches[0].clientX;
    });

    sliderAreas.addEventListener("touchend", (e) => {
      let endXAreas = e.changedTouches[0].clientX;
      let diffAreas = startXAreas - endXAreas;

      if (diffAreas > 50) {
        // swipe left
        currentIndexAreas = (currentIndexAreas + 1) % slidesAreas.length;
        updateSlideAreas();
      } else if (diffAreas < -50) {
        // swipe right
        currentIndexAreas = (currentIndexAreas - 1 + slidesAreas.length) % slidesAreas.length;
        updateSlideAreas();
      }
    });

    const sliderAroundHostel = document.querySelector("#around-hostel-adaptive .main-slide");
    const slidesAroundHostel = document.querySelectorAll("#around-hostel-adaptive .slide");
    const prevBtnAroundHostel = document.querySelector("#around-hostel-adaptive .nav-btn.prev");
    const nextBtnAroundHostel = document.querySelector("#around-hostel-adaptive .nav-btn.next");
    let currentIndexAroundHostel = 0;

    function updateSlideAroundHostel() {
      sliderAroundHostel.style.transform = `translateX(-${currentIndexAroundHostel * 100}%)`;
    }

    prevBtnAroundHostel.addEventListener("click", () => {
      currentIndexAroundHostel = (currentIndexAroundHostel - 1 + slidesAroundHostel.length) % slidesAroundHostel.length;
      updateSlideAroundHostel();
    });

    nextBtnAroundHostel.addEventListener("click", () => {
      currentIndexAroundHostel = (currentIndexAroundHostel + 1) % slidesAroundHostel.length;
      updateSlideAroundHostel();
    });

    // Touch swipe
    let startXAroundHostel = 0;
    sliderAroundHostel.addEventListener("touchstart", (e) => {
      startXAroundHostel = e.touches[0].clientX;
    });

    sliderAroundHostel.addEventListener("touchend", (e) => {
      let endXAroundHostel = e.changedTouches[0].clientX;
      let diffAroundHostel = startXAroundHostel - endXAroundHostel;

      if (diffAroundHostel > 50) {
        // swipe left
        currentIndexAroundHostel = (currentIndexAroundHostel + 1) % slidesAroundHostel.length;
        updateSlideAroundHostel();
      } else if (diffAroundHostel < -50) {
        // swipe right
        currentIndexAroundHostel = (currentIndexAroundHostel - 1 + slidesAroundHostel.length) % slidesAroundHostel.length;
        updateSlideAroundHostel();
      }
    });
});

// document.addEventListener("DOMContentLoaded", () => {
//     const reviewTrack = document.querySelector(".reviews-track");
//     const reviews = document.querySelectorAll(".review-adaptive");
//     const prevReviewBtn = document.querySelector(".nav-btn-review.prev");
//     const nextReviewBtn = document.querySelector(".nav-btn-review.next");
//     let currentReviewIndex = 0;

//     function updateReviewSlide() {
//         reviewTrack.style.transform = `translateX(-${currentReviewIndex * 100}%)`;
//     }

//     prevReviewBtn.addEventListener("click", () => {
//         currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
//         updateReviewSlide();
//     });

//     nextReviewBtn.addEventListener("click", () => {
//         currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
//         updateReviewSlide();
//     });

//     // Touch swipe
//     let startX = 0;
//     reviewTrack.addEventListener("touchstart", (e) => {
//         startX = e.touches[0].clientX;
//     });

//     reviewTrack.addEventListener("touchend", (e) => {
//         const endX = e.changedTouches[0].clientX;
//         const diff = startX - endX;

//         if (diff > 50) {
//             currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
//             updateReviewSlide();
//         } else if (diff < -50) {
//             currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
//             updateReviewSlide();
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll("#faq-adaptive .faq-toggle");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const panel = toggle.nextElementSibling;
      panel.classList.toggle("open");
    });
  });
});

