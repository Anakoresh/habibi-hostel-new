const modal = document.getElementById('modal-gallery');
const modalImg = document.getElementById('modal-img');
const galleryItems = document.querySelectorAll('.gallery-item');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer')

let currentIndex = 0;

function openModal(index) {
  modal.classList.add('active');
  header.classList.add('d-none');
  footer.classList.add('d-none');
  modalImg.src = galleryItems[index].src;
  currentIndex = index;
}

function closeModal() {
  modal.classList.remove('active');
  header.classList.remove('d-none');
  footer.classList.remove('d-none');
}

function showPrev() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  modalImg.src = galleryItems[currentIndex].src;
}

function showNext() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  modalImg.src = galleryItems[currentIndex].src;
}

galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => openModal(index));
});

closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

document.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('active')) return;
  if (e.key === 'ArrowLeft') showPrev();
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'Escape') closeModal();
});

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

modal.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

modal.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  touchEndY = e.changedTouches[0].screenY;

  handleSwipeGesture();
}, { passive: true });

function handleSwipeGesture() {
  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;

  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);

  if (Math.max(absX, absY) < 30) return; 

  if (absX > absY) {
    if (deltaX > 0) {
      showPrev(); 
    } else {
      showNext(); 
    }
  } else {
    closeModal();
  }
}

window.addEventListener('click', (e) => {
  if (e.target === document.getElementById('modal-gallery')) {
    modal.classList.remove('active');
    header.classList.remove('d-none');
    footer.classList.remove('d-none');
  }
});

