document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const menu = document.querySelector('.header_menu');
    const menuList = document.querySelectorAll('.header_link');
    const footer_links = document.querySelector('.links');
    const add_links = document.querySelector('.add-links');
    const copyright = document.documentElement.querySelector('.copyright');
    const svgElement = document.getElementById('mySvg');
    const error_message = document.querySelector('.error-message') 

    // Проверяем, включен ли тёмный режим на устройстве пользователя
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkModeMediaQuery.matches) {
        // Если тёмная тема включена, применяем классы к элементам страницы
        document.body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode');
        menu.classList.toggle('dark');
        footer_links.classList.toggle('dark');
        add_links.classList.toggle('dark');
        copyright.classList.toggle('dark');
        menuList.forEach(function (item) {
            item.classList.toggle('dark');
        });
    }

    // Обработчик для кнопки переключения тёмной темы
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
            header.classList.toggle('dark-mode');
            footer.classList.toggle('dark-mode');
            menu.classList.toggle('dark');
            footer_links.classList.toggle('dark');
            add_links.classList.toggle('dark');
            copyright.classList.toggle('dark');
            menuList.forEach(function (item) {
                item.classList.toggle('dark');
            });
            
            // Проверяем наличие класса "error-message" и добавляем класс "dark", если он присутствует
            if (error_message) {
                error_message.classList.toggle('dark', !error_message.classList.contains('dark'));
            }
        });
    }

    // Сохраняем оригинальный код SVG
    const originalSvgCode = svgElement.innerHTML;

    // Добавляем слушатель события для SVG элемента
    if (svgElement) {
        svgElement.addEventListener('click', function () {
            // Проверяем, была ли изменена SVG
            if (svgElement.innerHTML !== originalSvgCode) {
                // Если изменена, восстанавливаем оригинальный код
                svgElement.innerHTML = originalSvgCode;
            } else {
                // Создаем анимацию морфинга для перехода между двумя иконками
                const morphTimeline = gsap.timeline({ paused: true });
                morphTimeline.to(svgElement.querySelector('path'), { morphSVG: '#newPath' });

                morphTimeline.play(); // Запускаем анимацию морфинга
            }
        });
    }
});
