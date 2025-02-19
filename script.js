
const darkModeButton = document.getElementById('toggle-dark-mode');
darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeButton.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
});


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.stat-item').forEach(item => {
        const statValue = item.getAttribute('data-stat');
        setTimeout(() => {
            item.style.opacity = 1;
            item.querySelector('h3').textContent = statValue;
        }, 1000);
    });
});

const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
