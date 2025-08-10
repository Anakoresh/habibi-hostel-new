 document.addEventListener("DOMContentLoaded", function () {
    if ('IntersectionObserver' in window) {
      let lazyBackgrounds = document.querySelectorAll('.lazy-bg');
      
      let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let el = entry.target;
            let bgUrl = el.getAttribute('data-bg');
            if (bgUrl) {
              el.style.backgroundImage = `url('${bgUrl}')`;
              el.removeAttribute('data-bg'); 
            }
            observer.unobserve(el); 
          }
        });
      });

      lazyBackgrounds.forEach(bg => {
        observer.observe(bg);
      });
    } else {
      document.querySelectorAll('.lazy-bg').forEach(el => {
        let bgUrl = el.getAttribute('data-bg');
        if (bgUrl) {
          el.style.backgroundImage = `url('${bgUrl}')`;
          el.removeAttribute('data-bg');
        }
      });
    }
  });