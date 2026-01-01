document.addEventListener('DOMContentLoaded', () => {

    // Register GSAP Plugin
    gsap.registerPlugin(ScrollTrigger);

    // Canvas Particle Background
    const canvas = document.getElementById('bg-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        // Resize
        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        };

        window.addEventListener('resize', resize);

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.alpha = Math.random() * 0.5 + 0.1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }

            draw() {
                ctx.fillStyle = `rgba(41, 151, 255, ${this.alpha})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const count = Math.min(100, (width * height) / 15000);
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                p.update();
                p.draw();

                // Mouse interaction connection
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    ctx.strokeStyle = `rgba(41, 151, 255, ${0.2 * (1 - dist / 150)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            });
            requestAnimationFrame(animate);
        }

        // Mouse Tracking
        const mouse = { x: -1000, y: -1000 };
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        resize();
        animate();
    }

    // GSAP Animations
    // Hero Text Stagger
    gsap.from(".hero-content > *", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out"
    });

    // Feature Cards Stagger
    gsap.from(".feature-card", {
        scrollTrigger: {
            trigger: ".features",
            start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Parallax & Rotate Phone
    gsap.to(".phone-img", {
        scrollTrigger: {
            trigger: ".parallax-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        },
        rotateX: 20,
        scale: 0.9,
        y: -50
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // 3D Tilt Effect for Cards
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;

            // Move glow
            const glow = card.querySelector('.card-glow');
            if (glow) {
                glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2), transparent 70%)`;
                glow.style.opacity = '1';
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
            const glow = card.querySelector('.card-glow');
            if (glow) glow.style.opacity = '0';
        });
    });

    // Contact Form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const successMsg = document.querySelector('.form-success-msg');
            btn.innerText = 'Sending...';
            btn.style.opacity = '0.7';
            setTimeout(() => {
                btn.style.display = 'none';
                successMsg.classList.add('visible');
                contactForm.reset();
                showToast('Message sent successfully!');
            }, 1500);
        });
    }

    // Toast Notification System
    const toast = document.createElement('div');
    toast.className = 'toast-container';
    toast.innerHTML = `<i class="fa-solid fa-circle-check toast-icon"></i><span class="toast-msg">Notification</span>`;
    document.body.appendChild(toast);

    function showToast(message) {
        const msgSpan = toast.querySelector('.toast-msg');
        msgSpan.innerText = message;
        toast.classList.add('active');

        setTimeout(() => {
            toast.classList.remove('active');
        }, 3000);
    }

    // Attach simulation to other buttons
    const simButtons = document.querySelectorAll('a[href="#"], .btn:not(button[type="submit"])');
    simButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // If it's a section link, let it scroll (don't prevent default unless it's just '#')
            const href = btn.getAttribute('href');
            if (href === '#' || href === '') {
                e.preventDefault();
                const text = btn.innerText;

                if (text.includes('Download') || text.includes('App')) {
                    showToast('Downloading Vibe Installer...');
                } else if (text.includes('Term') || text.includes('Privacy')) {
                    showToast('Opening Legal Document...');
                } else {
                    showToast('Action Simulated!');
                }
            } else if (href && href.startsWith('#')) {
                // It is a scroll link, do nothing (let it scroll)
            } else {
                // It's some other link
            }
        });
    });

    // Pricing Buttons
    const pricingBtns = document.querySelectorAll('.pricing-card .btn');
    pricingBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const plan = btn.closest('.pricing-card').querySelector('h3').innerText;
            showToast(`Selected ${plan} Plan`);
        });
    });

});
