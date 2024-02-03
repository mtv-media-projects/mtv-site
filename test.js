document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('.light-mode');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const menu = document.querySelector('.header_menu');
    const menuList = document.querySelectorAll('.header_link');
    const footer_links = document.querySelector('.links')
    const copyright = this.documentElement.querySelector('.copyright')

    // Проверяем, включен ли тёмный режим на устройстве пользователя
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkModeMediaQuery.matches) {
        // Если тёмная тема включена, применяем классы к элементам страницы
        document.body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        menu.classList.add('dark');
        menuList.forEach(function(item) {
            item.classList.add('dark');
        });
    }

    // Обработчик для кнопки переключения тёмной темы
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            header.classList.toggle('dark-mode');
            footer.classList.toggle('dark-mode');
            menu.classList.toggle('dark');
            footer_links.classList.toggle('dark')
            copyright.classList.toggle('dark')
            menuList.forEach(function(item) {
                item.classList.toggle('dark');
            });
        });
    }
});