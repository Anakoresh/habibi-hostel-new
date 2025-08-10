const photos = [
    'img/balcony.webp',
    'img/hostel.webp',
    'img/bar.webp',
    'img/room-7.webp',
    'img/groundfloor.webp',
    'img/room-2.webp',
    'img/habibibar.webp',
    'img/bar-2.WEBP',
    'img/restaurant.webp',
    'img/rooftop.webp'
  ];

  let current = 0;
  const leftDiv = document.querySelector('.gallery-left');
  const rightDiv = document.querySelector('.gallery-right');

  function updateSlides() {
    const leftIndex = current % photos.length;
    const rightIndex = (current + 1) % photos.length;

    leftDiv.style.backgroundImage = `url(${photos[leftIndex]})`;
    rightDiv.style.backgroundImage = `url(${photos[rightIndex]})`;

    current++;
  }

  let interval = null;

  function startSlider() {
    if (!interval) {
      updateSlides();
      interval = setInterval(updateSlides, 4000);
    }
  }

  function stopSlider() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startSlider();
        } else {
          stopSlider();
        }
      });
    },
    { threshold: 0.5 }
  );

  const gallerySection = document.getElementById('gallery');
  observer.observe(gallerySection);
