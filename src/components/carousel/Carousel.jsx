import React from 'react';
import './carousel.css';

function Carousel() {
  //   React.useEffect(() => {
  //     const slides =
  //       document.getElementsByClassName('carousel-item');
  //     let slidePosition = 0;
  //     const totalSlides = slides.length;

  //     document
  //       .getElementById('carousel-button-next')
  //       .addEventListener('click', moveToNextSlide);
  //     document
  //       .getElementById('carousel-button-prev')
  //       .addEventListener('click', moveToPrevSlide);

  //     function hideAllSlides() {
  //       for (let slide of slides) {
  //         slide.classList.remove('carousel-item-visible');
  //         slide.classList.add('carousel-item-hidden');
  //       }
  //     }
  //   }, []);

  //   function moveToNextSlide() {
  //     hideAllSlides();

  //     if (slidePosition === totalSlides - 1) {
  //       slidePosition = 0;
  //     } else {
  //       slidePosition++;
  //     }

  //     slides[slidePosition].classList.add(
  //       'carousel-item-visible'
  //     );
  //   }

  //   function moveToPrevSlide() {
  //     hideAllSlides();

  //     if (slidePosition === 0) {
  //       slidePosition = totalSlides - 1;
  //     } else {
  //       slidePosition--;
  //     }

  //     slides[slidePosition].classList.add(
  //       'carousel-item-visible'
  //     );
  //   }

  return (
    <>
      <div class="carousel">
        <div class="carousel-item carousel-item-visible">
          <img src="https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
        <div class="carousel-item">
          <img src="https://images.pexels.com/photos/4792079/pexels-photo-4792079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
        <div class="carousel-item">
          <img src="https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>

        <div class="carousel-actions">
          <button
            id="carousel-button-prev"
            aria-label="Previous Slidex"
          ></button>
          <button
            id="carousel-button-next"
            aria-label="Next Slide"
          ></button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
