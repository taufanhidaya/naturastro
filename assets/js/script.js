// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Active navigation on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveNav);

// Parallax effect for mountains and trees
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const mountainLayers = document.querySelectorAll('.mountain-layer');
    const trees = document.querySelectorAll('.tree');
    
    mountainLayers.forEach((layer, index) => {
        const speed = (index + 1) * 0.15;
        layer.style.transform = `translateY(${scrolled * speed}px)`;
    });

    trees.forEach((tree, index) => {
        const speed = (index + 1) * 0.1;
        tree.style.transform = `translateY(${scrolled * speed}px) scale(${tree.classList.contains('tree-1') ? 1.2 : tree.classList.contains('tree-4') ? 1.3 : 1})`;
    });
});

// Scroll animations for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and items for scroll animation
const animateElements = document.querySelectorAll('.about-card, .skills-card, .projects-preview, .portfolio-item, .experience-card');

animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
});

// Staggered animation for portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});

// Read More button functionality
const readMoreBtn = document.querySelector('.read-more-btn');
if (readMoreBtn) {
    readMoreBtn.addEventListener('click', () => {
        const aboutText = document.querySelector('.about-text');
        if (aboutText.textContent.length < 100) {
            aboutText.textContent = 'Informatics student passionate about web development, UI/UX design, and coding. I love creating modern, responsive websites and applications that solve real-world problems. With expertise in HTML, CSS, JavaScript, and React, I bring ideas to life through clean code and beautiful design. Always learning new technologies and best practices to stay at the forefront of web development.';
            readMoreBtn.textContent = 'Read Less →';
        } else {
            aboutText.textContent = 'Informatics student passionate about web development, UI/UX design, and coding';
            readMoreBtn.textContent = 'Read More →';
        }
    });
}

// View Portfolio button
const viewPortfolioBtn = document.querySelector('.view-portfolio-btn');
if (viewPortfolioBtn) {
    viewPortfolioBtn.addEventListener('click', () => {
        const portfolioSection = document.querySelector('#portfolio');
        const offsetTop = portfolioSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
}

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(245, 241, 232, 1)';
        navbar.style.boxShadow = '0 2px 20px rgba(45, 74, 62, 0.3)';
    } else {
        navbar.style.backgroundColor = 'rgba(245, 241, 232, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(45, 74, 62, 0.2)';
    }
});

// Skill icons hover effect with rotation
const skillIcons = document.querySelectorAll('.skill-icon');
skillIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Social icons animation on hover
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) rotate(5deg)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// Portfolio overlay smooth appearance
const portfolioOverlays = document.querySelectorAll('.portfolio-overlay');
portfolioOverlays.forEach(overlay => {
    const parent = overlay.parentElement.parentElement;
    
    parent.addEventListener('mouseenter', function() {
        overlay.style.opacity = '1';
    });
    
    parent.addEventListener('mouseleave', function() {
        overlay.style.opacity = '0';
    });
});

// Add floating animation to plant decorations
const plants = document.querySelectorAll('.plant-decoration');
plants.forEach((plant, index) => {
    plant.style.animation = `float 3s ease-in-out ${index * 0.5}s infinite`;
});

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style);

// Counter animation for experience years (if you want to add this feature)
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Prevent scroll restoration on page reload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
});

console.log('Portfolio initialized successfully! 🌲');