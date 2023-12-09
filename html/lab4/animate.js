document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.highlightable');

    images.forEach(image => {
      image.addEventListener('mouseenter', function () {
        this.style.filter = 'brightness(80%)'; 
      });

      image.addEventListener('mouseleave', function () {
        this.style.filter = 'brightness(100%)'; 
      });
    });
  });