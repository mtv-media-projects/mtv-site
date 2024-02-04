document.addEventListener('DOMContentLoaded', function () {
	const darkModeToggle = document.querySelector('.theme-switch')
	const header = document.querySelector('header')
	const footer = document.querySelector('footer')
	const menu = document.querySelector('.header_menu')
	const menuList = document.querySelectorAll('.header_link')
	const footer_links = document.querySelector('.links')
	const copyright = document.documentElement.querySelector('.copyright')
	const svgElement = document.getElementById('mySvg')

	// Проверяем, включен ли тёмный режим на устройстве пользователя
	const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
	if (darkModeMediaQuery.matches) {
		// Если тёмная тема включена, применяем классы к элементам страницы
		document.body.classList.add('dark-mode')
		header.classList.add('dark-mode')
		footer.classList.add('dark-mode')
		menu.classList.add('dark')
		menuList.forEach(function (item) {
			item.classList.add('dark')
		})
	}

	// Обработчик для кнопки переключения тёмной темы
	if (darkModeToggle) {
		darkModeToggle.addEventListener('click', function () {
			document.body.classList.toggle('dark-mode')
			header.classList.toggle('dark-mode')
			footer.classList.toggle('dark-mode')
			menu.classList.toggle('dark')
			footer_links.classList.toggle('dark')
			copyright.classList.toggle('dark')
			menuList.forEach(function (item) {
				item.classList.toggle('dark')
			})
		})
	}

	// Сохраняем оригинальный код SVG
	const originalSvgCode = svgElement.innerHTML

	// Добавляем слушатель события для SVG элемента
	if (svgElement) {
		svgElement.addEventListener('click', function () {
			// Проверяем, была ли изменена SVG
			if (svgElement.innerHTML !== originalSvgCode) {
				// Если изменена, восстанавливаем оригинальный код
				svgElement.innerHTML = originalSvgCode
			} else {
				// Иначе, добавляем код для изменения SVG элемента
				svgElement.innerHTML =
					'<path d="M479.971-122.5Q331-122.5 226.75-226.779 122.5-331.059 122.5-480.029 122.5-629 226.771-733.25T480-837.5q12 0 24 .75t23.5 2.75q-39.5 29.5-62.75 75t-23.25 99q0 91.042 63.729 154.771Q568.958-441.5 660-441.5q54.065 0 99.282-23.25Q804.5-488 834-527.5q2 11.5 2.75 23.5t.75 24q0 148.958-104.279 253.229Q628.941-122.5 479.971-122.5Zm.192-75Q569-197.5 640-247.75 711-298 744-378.5q-21.333 5.455-42.667 8.727Q680-366.5 660.158-366.5q-122.027 0-207.842-85.816Q366.5-538.131 366.5-660.158q0-19.842 3.273-41.175 3.272-21.334 8.727-42.667-80.5 33-130.75 103.921T197.5-480q0 117.036 82.78 199.768T480.163-197.5ZM471-471Z"/></svg>'
			}
		})
	}
})
