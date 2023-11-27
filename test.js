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
$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})