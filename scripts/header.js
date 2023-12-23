// Обработчик события скролла
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        header.style.top = '-80px'; // Скрываем хедер при скролле вниз
    } else {
        header.style.top = '0'; // Показываем хедер при скролле вверх
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Определение направления скролла
});

//кнопка меню
document.addEventListener('DOMContentLoaded', function() {
    const headerBurger = document.querySelector('.header_burger');
    const headerMenu = document.querySelector('.header_menu');
    const body = document.body;

    if (headerBurger && headerMenu) {
        headerBurger.addEventListener('click', function(event) {
            headerBurger.classList.toggle('active');
            headerMenu.classList.toggle('active');
            body.classList.toggle('lock');
        });
    }
});