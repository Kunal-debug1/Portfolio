         // Loader
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
            }, 500);
        });

        // Typing Animation
        const texts = ['Software Developer', 'Python Enthusiast', 'AI/ML Explorer', 'Full-Stack Developer'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const pauseTime = 2000;

        function typeText() {
            const currentText = texts[textIndex];
            const typingElement = document.getElementById('typingText');
            
            if (!isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                
                if (charIndex === currentText.length) {
                    isDeleting = true;
                    setTimeout(typeText, pauseTime);
                    return;
                }
            } else {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                
                if (charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                }
            }
            
            const speed = isDeleting ? deletingSpeed : typingSpeed;
            setTimeout(typeText, speed);
        }

        typeText();

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Scroll to Top Button
            const scrollTop = document.getElementById('scrollTop');
            if (window.scrollY > 300) {
                scrollTop.classList.add('visible');
            } else {
                scrollTop.classList.remove('visible');
            }
        });

        // Mobile Menu Toggle
        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        function closeMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.remove('active');
        }

        // Smooth Scrolling
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

        // Scroll to Top
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Form Submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // Show success message (in real app, you'd send this to a backend)
            alert(`Thank you for your message, ${formData.name}! I'll get back to you soon at ${formData.email}.`);
            
            // Reset form
            this.reset();
        });

        // Intersection Observer for Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 1s ease forwards';
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Add parallax effect to hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-content');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                hero.style.opacity = 1 - scrolled / 800;
            }
        });

        // Add hover effect to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) rotateX(5deg)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) rotateX(0)';
            });
        });

        // Add dynamic year to footer
        const year = new Date().getFullYear();
        document.querySelector('footer p').textContent = `© ${year} Kunal Gaikwad. All rights reserved.`;

// =========================
// Resume Download Button
// =========================
const resumeBtn = document.createElement("a");
resumeBtn.textContent = "📄 Download Resume";
resumeBtn.href = "kunal resume.pdf"; // replace with your resume file path
resumeBtn.download = "Kunal_Gaikwad_Resume.pdf";
resumeBtn.className = "btn btn-primary";
document.querySelector(".btn-group").appendChild(resumeBtn);
