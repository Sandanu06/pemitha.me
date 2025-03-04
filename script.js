// Custom Cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add hover effects to interactive elements
document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovered');
    });
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Mobile Menu Toggle
const mobileMenuToggle = document.createElement('button');
mobileMenuToggle.classList.add('mobile-menu-toggle');
mobileMenuToggle.innerHTML = '☰';
document.querySelector('.navbar-content').appendChild(mobileMenuToggle);

mobileMenuToggle.addEventListener('click', () => {
    document.querySelector('.navbar-menu').classList.toggle('active');
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Initialize smoothscroll polyfill
if ('scrollBehavior' in document.documentElement.style === false) {
    const smoothscroll = require('smoothscroll-polyfill');
    smoothscroll.polyfill();
}
