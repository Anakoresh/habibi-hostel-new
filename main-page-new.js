document.addEventListener("DOMContentLoaded", () => {
  const lazyBackgrounds = document.querySelectorAll(".lazy-bg");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.style.backgroundImage = url('${entry.target.dataset.bg}');
              observer.unobserve(entry.target);
          }
      });
  });

  lazyBackgrounds.forEach((bg) => observer.observe(bg));
});

const textElement = document.getElementById('text');
const text = textElement.innerHTML; 
textElement.innerHTML = ''; 
let i = 0;

function typeEffect() {
  if (i < text.length) {
    if (text[i] === '<') {
      const tagEnd = text.indexOf('>', i) + 1;
      textElement.innerHTML += text.slice(i, tagEnd);
      i = tagEnd;
    } else {
      textElement.innerHTML += text[i];
      i++;
    }
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-swiper-button-next',
    prevEl: '.reviews-swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiperTwo = new Swiper(".swiper-two", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-two-button-next",
    prevEl: ".swiper-two-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInterection: false,
  },
  allowTouchMove: true,
});

document.querySelector('.about-us-left button').addEventListener('click', function () {
    document.getElementById('story-modal').style.display = 'flex';
});

document.querySelector('.close-modal').addEventListener('click', function () {
    document.getElementById('story-modal').style.display = 'none';
});

window.addEventListener('click', function (e) {
    const modal = document.getElementById('story-modal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.querySelectorAll('.map-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.getElementById('map-modal').style.display = 'flex';
  });
});

document.querySelector('#map-modal .close-modal').addEventListener('click', () => {
  document.getElementById('map-modal').style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === document.getElementById('map-modal')) {
    document.getElementById('map-modal').style.display = 'none';
  }
});
