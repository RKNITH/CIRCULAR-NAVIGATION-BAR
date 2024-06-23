const toggle = document.getElementById('toggle');
const circle = document.getElementById('circle');
const navItems = document.querySelectorAll('.nav-item');

toggle.addEventListener('click', () => {
    circle.classList.toggle('open');
    navItems.forEach(item => {
        item.classList.toggle('open');
    });
});
