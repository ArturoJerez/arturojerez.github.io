// Cambiar modo oscuro/claro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
});

// Menú de navegación fijo al hacer scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#4a90e2';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});