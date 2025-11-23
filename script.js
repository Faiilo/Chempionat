// Слайдер
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Автопереключение слайдов
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Индикаторы слайдера
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
    });
});

// Бургер-меню
const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('.nav-list');

burgerMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});

// Простая валидация формы поиска
const searchInput = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-box .btn');

searchButton.addEventListener('click', () => {
    if (searchInput.value.trim() === '') {
        searchInput.style.borderColor = 'red';
        setTimeout(() => {
            searchInput.style.borderColor = 'var(--primary-color)';
        }, 2000);
    }
});