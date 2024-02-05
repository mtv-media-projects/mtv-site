document.addEventListener('DOMContentLoaded', function () {
	const darkModeToggle = document.querySelector('.theme-switch')
	const header = document.querySelector('header')
	const footer = document.querySelector('footer')
	const menu = document.querySelector('.header_menu')
	const menuList = document.querySelectorAll('.header_link')
	const footer_links = document.querySelector('.links')
	const add_links = document.querySelector('.add-links')
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
			add_links.classList.toggle('dark')
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
					'<path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/>'
			}
		})
	}
})
