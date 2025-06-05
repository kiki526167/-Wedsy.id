  document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("show");
      }, index * 300); // delay animasi per elemen
    });
  });

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && rect.bottom > 0
    );
  }

  function checkFadeIn() {
    document.querySelectorAll('.scroll-fade').forEach((el) => {
      if (isInViewport(el)) {
        el.classList.add('show');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', checkFadeIn);
  window.addEventListener('scroll', checkFadeIn);


  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom > 0
    );
  }

  function openModal(id) {
    document.getElementById(id).style.display = 'block';
  }

  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }

  // Menutup jika klik di luar modal
  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  function checkScrollAnimations() {
    document.querySelectorAll('.scroll-left').forEach((el) => {
      if (isInViewport(el)) {
        el.classList.add('show');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', checkScrollAnimations);
  window.addEventListener('scroll', checkScrollAnimations);

  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 } // Animasi aktif saat 20% elemen terlihat
    );

    const slide = document.querySelector('.pagesslide4');
    if (slide) {
      observer.observe(slide);
    }
  });
