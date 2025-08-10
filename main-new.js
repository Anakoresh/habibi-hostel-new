document
  .getElementById("availability-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const checkIn = document.getElementById("check-in").value;
    const checkOut = document.getElementById("check-out").value;
    const adults = document.getElementById("adults").value;

    if (!checkIn || !checkOut || !adults) {
      alert("Please fill out all fields.");
      return;
    }

    const baseUrl =
      "https://ibe.sabeeapp.com/properties/Habibi-Hostel-booking/";
    const params = `?p=bSp15b42f200a54001b&checkin=${checkIn}&checkout=${checkOut}&adults=${adults}`;
    const fullUrl = baseUrl + params;

    window.open(fullUrl, "_blank");
  });

document
  .getElementById("availability-form-adaptive")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const checkIn = document.getElementById("check-in-adaptive").value;
    const checkOut = document.getElementById("check-out-adaptive").value;
    const adults = document.getElementById("adults-adaptive").value;

    if (!checkIn || !checkOut || !adults) {
      alert("Please fill out all fields.");
      return;
    }

    const baseUrl =
      "https://ibe.sabeeapp.com/properties/Habibi-Hostel-booking/";
    const params = `?p=bSp15b42f200a54001b&checkin=${checkIn}&checkout=${checkOut}&adults=${adults}`;
    const fullUrl = baseUrl + params;

    window.open(fullUrl, "_blank");
});

document.addEventListener("DOMContentLoaded", function () {
    const homeSection = document.querySelector("#home");
    const checkAvailabilityBox = document.querySelector(".check-availability-box");
    const checkAvailabilityForm = document.querySelector(".home-bottom-left");
    const closeFormBtn = document.querySelector(".close-form");
    const expandFormBtn = document.querySelector(".expand-form");

    const formIsExpanded = () => checkAvailabilityForm.classList.contains("expanded");

    // Функция проверки, виден ли #home
    function isHomeVisible() {
      const rect = homeSection.getBoundingClientRect();
      return rect.bottom > 0;
    }

    // Обработка скролла
    function handleScroll() {
      if (!formIsExpanded() && !isHomeVisible()) {
        checkAvailabilityBox.classList.remove("d-none");
        checkAvailabilityBox.classList.add("d-flex");
      } else {
        checkAvailabilityBox.classList.add("d-none");
        checkAvailabilityBox.classList.remove("d-flex")
      }
    }

    // Expand form
    expandFormBtn.addEventListener("click", function () {
      checkAvailabilityForm.classList.add("expanded");
      closeFormBtn.classList.remove("d-none");
      checkAvailabilityBox.classList.add("d-none");
      checkAvailabilityBox.classList.remove("d-flex")
    });

    // Close form
    closeFormBtn.addEventListener("click", function () {
      checkAvailabilityForm.classList.remove("expanded");
      closeFormBtn.classList.add("d-none");
      if (!formIsExpanded() && !isHomeVisible()) {
        checkAvailabilityBox.classList.remove("d-none")
        checkAvailabilityBox.classList.add("d-flex");
      }
    });

    document.addEventListener("click", function (event) {
      const isClickInsideForm = checkAvailabilityForm.contains(event.target);
      const isClickOnExpandBtn = expandFormBtn.contains(event.target);

      if (formIsExpanded() && !isClickInsideForm && !isClickOnExpandBtn) {
        checkAvailabilityForm.classList.remove("expanded");
        closeFormBtn.classList.add("d-none");

      if (!isHomeVisible()) {
        checkAvailabilityBox.classList.remove("d-none");
        checkAvailabilityBox.classList.add("d-flex");
        }
      }
    });

    // Отслеживание скролла
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Запуск при загрузке страницы
  });

document.addEventListener('DOMContentLoaded', () => {
  const links = [
    'home',
    'rooms',
    'areas',
    'services',
    'around-hostel',
    'faq'
  ];

  function updateMenuLinks() {
    const isMobile = window.innerWidth <= 1023;

    links.forEach(id => {
      const link = document.getElementById(`link-${id}`);
      if (link) {
        const targetId = isMobile ? `#${id}-adaptive` : `#${id}`;
        link.setAttribute('href', targetId);
      }
    });
  }

  updateMenuLinks();
  window.addEventListener('resize', updateMenuLinks);
});

document.addEventListener("DOMContentLoaded", function () {
  const checkAvailabilityBoxAdaptive = document.querySelector("#home-adaptive .check-availability-box");
  const checkAvailabilityFormAdaptive = document.querySelector(".check-availability-form-adaptive");
  const closeFormBtnAdaptive = document.querySelector(".check-availability-form-adaptive .close-form");

  // Открыть форму при клике на box
  checkAvailabilityBoxAdaptive.addEventListener("click", function () {
    checkAvailabilityFormAdaptive.classList.add("d-flex");
    checkAvailabilityBoxAdaptive.classList.add("d-none");
    checkAvailabilityBoxAdaptive.classList.remove("d-flex");
  });

  // Кнопка "закрыть форму"
  closeFormBtnAdaptive.addEventListener("click", function (e) {
    e.stopPropagation(); // чтобы клик не всплывал
    checkAvailabilityFormAdaptive.classList.remove("d-flex");
    checkAvailabilityBoxAdaptive.classList.remove("d-none");
    checkAvailabilityBoxAdaptive.classList.add("d-flex");
  });

  // Клик вне формы — закрывает её
  document.addEventListener("click", function (event) {
    const isClickInsideForm = checkAvailabilityFormAdaptive.contains(event.target);
    const isClickInsideBox = checkAvailabilityBoxAdaptive.contains(event.target);

    if (
      checkAvailabilityFormAdaptive.classList.contains("d-flex") &&
      !isClickInsideForm &&
      !isClickInsideBox
    ) {
      checkAvailabilityFormAdaptive.classList.remove("d-flex");
      checkAvailabilityBoxAdaptive.classList.remove("d-none");
      checkAvailabilityBoxAdaptive.classList.add("d-flex");
    }
  });
});





