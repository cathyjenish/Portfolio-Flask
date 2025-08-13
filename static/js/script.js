// Portfolio Website JavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initNavigation();
    initScrollEffects();
    initFormValidation();
    initScrollToTop();
    initAnimations();
});
document.addEventListener("DOMContentLoaded", () => {
    const badges = document.querySelectorAll(".skill-badge");
    badges.forEach(badge => {
        badge.addEventListener("click", () => {
            alert(`You clicked on ${badge.textContent.trim()}`);
        });
    });
});



// Navigation Functions
function initNavigation() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Update active navigation item on scroll
    window.addEventListener('scroll', updateActiveNav);
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Scroll Effects
function initScrollEffects() {
    // Fade in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
}

// Form Validation
function initFormValidation() {
    const forms = document.querySelectorAll('.needs-validation');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            form.classList.add('was-validated');
        });
    });
}

// Contact Form Handler
function handleContactForm() {
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="loading"></span> Sending...';
            
            try {
                const response = await fetch(this.action, {
                    method: 'POST',
                    body: formData
                });
                
                if (response.ok) {
                    // Success - page will reload with flash message
                    window.location.href = response.url;
                } else {
                    throw new Error('Failed to send message');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to send message. Please try again.');
                
                // Reset button
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }
}

// Scroll to Top Button
function initScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollBtn.title = 'Scroll to top';
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animation Functions
function initAnimations() {
    // Add fade-in classes to elements
    const elementsToAnimate = document.querySelectorAll('.card, .section-title, .list-group-item');
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
    });
}

// Typing Animation for Hero Text
function initTypingAnimation() {
    const titleElement = document.querySelector('.hero-content h2');
    if (titleElement) {
        const text = titleElement.textContent;
        titleElement.textContent = '';
        
        let index = 0;
        const typeInterval = setInterval(() => {
            titleElement.textContent += text[index];
            index++;
            
            if (index === text.length) {
                clearInterval(typeInterval);
            }
        }, 100);
    }
}

// Dynamic Skill Counter
function initSkillCounter() {
    const skillBadges = document.querySelectorAll('.badge');
    
    skillBadges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            badge.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            badge.style.opacity = '1';
            badge.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Project Filter (if needed)
    function initProjectFilter() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projects = document.querySelectorAll('.project-card');
        
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.dataset.filter;
                
                // Remove active class from all buttons
                filterButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
            // Filter projects
            // projects.forEach(project => {
            //     if (filter === 'all' || project.dataset.category === filter) {
            //         project.style.display = 'block';
            //         project.classList.add('fade-in');
            //     } else {
            //         project.style.display = 'none';
            //     }
            });
        });
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
    }
}

// Utility Functions
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Initialize additional features
    window.addEventListener('load', function() {
        initTypingAnimation();
        initSkillCounter();
        handleContactForm();
        initMobileMenu();
    });

    // Export functions for testing
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            initNavigation,
            initScrollEffects,
            initFormValidation,
            handleContactForm
        };
}
