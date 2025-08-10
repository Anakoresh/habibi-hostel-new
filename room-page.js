document.querySelectorAll('.thumb').forEach(thumb => {
  thumb.addEventListener('click', function() {
    const mainPhoto = document.getElementById('main-photo');
    mainPhoto.src = this.src;
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
  });
});

const openBtn = document.querySelector('.extra-services-btn button');
  const modal = document.getElementById('extra-services-modal');
  const closeBtn = document.getElementById('close-modal-btn');

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
});

const mainPhoto = document.getElementById('main-photo');
const thumbnails = Array.from(document.querySelectorAll('.thumb'));

let currentIndex = thumbnails.findIndex(t => t.classList.contains('active'));

function updateMainPhoto(index) {
  if (index < 0 || index >= thumbnails.length) return;

  mainPhoto.src = thumbnails[index].src;
  thumbnails.forEach(t => t.classList.remove('active'));
  thumbnails[index].classList.add('active');
  currentIndex = index;
}

let startX = 0;

mainPhoto.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
}, { passive: true });

mainPhoto.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  handleSwipe(endX - startX);
}, { passive: true });

mainPhoto.addEventListener('mousedown', e => {
  startX = e.clientX;
});

mainPhoto.addEventListener('mouseup', e => {
  const endX = e.clientX;
  handleSwipe(endX - startX);
});

mainPhoto.setAttribute('draggable', false);

function handleSwipe(deltaX) {
  if (Math.abs(deltaX) > 50) {
    if (deltaX > 0) {
      updateMainPhoto(currentIndex - 1);
    } else {
      updateMainPhoto(currentIndex + 1);
    }
  }
}

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    updateMainPhoto(index);
  });
});
