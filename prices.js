fetch('rooms.json')
  .then(response => response.json())
  .then(prices => {
    for (const [roomId, priceText] of Object.entries(prices)) {
      const el = document.getElementById('price-' + roomId);
      if (el) {
        el.innerText = priceText;
      }
    }
  })
  .catch(error => {
    console.error('Failed to load prices:', error);
});

fetch('extra-services.txt')
  .then(response => response.text())
  .then(text => {
    const modalContent = document.querySelector('.services-modal-content ul');
    modalContent.innerHTML = '';
    text.split('\n').forEach(line => {
      if (line.trim().startsWith('-')) {
        const li = document.createElement('li');
        li.textContent = line.replace('-', '').trim();
        modalContent.appendChild(li);
      }
    });
  })
.catch(err => console.error('Failed to load extra services:', err));
