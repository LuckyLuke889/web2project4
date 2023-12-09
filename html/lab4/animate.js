document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.highlightable');

    images.forEach(image => {
      image.addEventListener('mouseenter', function () {
        this.style.filter = 'brightness(80%)'; /* Promenite vrednosti da biste prilagodili zatamnjenje */
      });

      image.addEventListener('mouseleave', function () {
        this.style.filter = 'brightness(100%)'; /* Vraćanje originalne svetlosti */
      });
    });
  });