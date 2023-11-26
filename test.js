// Обработчик события скролла
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.top = '-80px'; // Скрываем хедер при скролле вниз
    } else {
        header.style.top = '0'; // Показываем хедер при скролле вверх
    }
});

// Обработчик клика по кнопке меню для мобильных устройств
document.getElementById('menuButton').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
    document.getElementById('menuButton').style.display = 'none';
    document.getElementById('closeMenuButton').style.display = 'block';
});

// Обработчик клика по кнопке закрытия меню
document.getElementById('closeMenuButton').addEventListener('click', function() {
    document.querySelector('.nav').classList.remove('active');
    document.getElementById('menuButton').style.display = 'block';
    document.getElementById('closeMenuButton').style.display = 'none';
});