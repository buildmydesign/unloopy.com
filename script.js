// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Simple fade-in on scroll for cards (subtle, no fancy animations)
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.fact-card, .feature-card, .testimonial-card');
    cards.forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.4s ease';
        observer.observe(el);
    });
});