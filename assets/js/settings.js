const menuIcon = document.getElementById('menuIcon');
const slidePanel = document.getElementById('slidePanel');
const closePanel = document.getElementById('closePanel');
const overlay = document.getElementById('overlay');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Open panel
menuIcon.addEventListener('click', () => {
    slidePanel.classList.add('active');
    overlay.classList.add('active');
});

// Close panel
closePanel.addEventListener('click', () => {
    slidePanel.classList.remove('active');
    overlay.classList.remove('active');
});

// Close when clicking overlay
overlay.addEventListener('click', () => {
    slidePanel.classList.remove('active');
    overlay.classList.remove('active');
});

// Theme toggle (same as before)
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});