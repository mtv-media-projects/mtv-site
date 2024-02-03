document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('.light-mode');
    const header = document.querySelector('header');

    if (darkModeToggle && header) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            header.classList.toggle('dark-mode');
        });
    }
});