// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.padding = '0.5rem 5%';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.padding = '1rem 5%';
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        navLinks.style.animation = 'slideDown 0.5s ease forwards';
    } else {
        navLinks.style.animation = 'slideUp 0.5s ease forwards';
    }
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Intersection Observer for Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            entry.target.style.opacity = 1;
        }
    });
}, {
    threshold: 0.1
});

// Observe all product cards and section titles
document.querySelectorAll('.product-card, .section-title').forEach(el => {
    el.style.opacity = 0;
    observer.observe(el);
});

// Form Handling
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Add loading state
    const button = form.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Sending...';
    button.disabled = true;

    // Simulate form submission
    setTimeout(() => {
        button.textContent = 'Message Sent!';
        button.style.backgroundColor = '#27ae60';

        // Reset form after delay
        setTimeout(() => {
            form.reset();
            button.textContent = originalText;
            button.style.backgroundColor = '#3498db';
            button.disabled = false;
        }, 2000);
    }, 1500);
});

// Dynamic card hover effect
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const cardBg = card.querySelector('.card-bg');
        cardBg.style.transform = `scale(1.1) translate(${x / 30}px, ${y / 30}px)`;
    });

    card.addEventListener('mouseleave', () => {
        const cardBg = card.querySelector('.card-bg');
        cardBg.style.transform = 'scale(1) translate(0, 0)';
    });
});