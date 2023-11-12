// const gallery = document.querySelector('.galery');
// const sliderBlocks = document.querySelectorAll('.content-slider-block');
// let currentIndex = 0;

// function showSlide(index) {
//     if (index < 0) {
//         index = sliderBlocks.length - 1;
//     } else if (index >= sliderBlocks.length) {
//         index = 0;
//     }

//     sliderBlocks.forEach((block, i) => {
//         if (i === index) {
//             block.style.display = 'block';
//         } else {
//             block.style.display = 'none';
//         }
//     });

//     currentIndex = index;
// }

// function nextSlide() {
//     showSlide(currentIndex + 1);
// }

// function prevSlide() {
//     showSlide(currentIndex - 1);
// }

// showSlide(currentIndex); // Початкове відображення

// Навішайте обробники подій для кнопок "Наступний" і "Попередній"

// let currentSlide = 0;
// const slides = document.querySelectorAll('.content-slider-block');

// function showSlide(index) {
//     slides[currentSlide].classList.remove('active');
//     currentSlide = (index + slides.length) % slides.length;
//     slides[currentSlide].classList.add('active');
// }

// function nextSlide() {
//     showSlide(currentSlide + 1);
// }

// function prevSlide() {
//     showSlide(currentSlide - 1);
// }

// setInterval(nextSlide, 3000); 