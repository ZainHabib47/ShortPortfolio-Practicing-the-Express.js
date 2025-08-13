// Cosmic JavaScript
        document.addEventListener('DOMContentLoaded', function() {
            // Create stars
            createStars();
            
            // Animate nebula and planet
            animateCosmicElements();
            
            // Smooth scrolling for navigation
            setupSmoothScrolling();
            
            // Form submission
            setupForm();
            
            // Parallax effect
            setupParallax();
        });
        
        function createStars() {
            const starsContainer = document.getElementById('stars-container');
            const starCount = 200;
            
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                
                // Random size between 1 and 3 pixels
                const size = Math.random() * 2 + 1;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                
                // Random position
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                
                // Random twinkle duration
                star.style.setProperty('--duration', `${Math.random() * 5 + 3}s`);
                
                // Random brightness
                star.style.opacity = Math.random() * 0.5 + 0.1;
                
                starsContainer.appendChild(star);
            }
        }
        
        function animateCosmicElements() {
            const nebula = document.getElementById('nebula');
            const planet = document.getElementById('planet');
            
            // Random initial positions
            nebula.style.left = `${Math.random() * 70}%`;
            nebula.style.top = `${Math.random() * 70}%`;
            
            planet.style.right = `${Math.random() * 30}%`;
            planet.style.bottom = `${Math.random() * 30}%`;
            
            // Add mouse move interaction
            document.addEventListener('mousemove', (e) => {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                
                nebula.style.transform = `translate(${x * 30 - 15}px, ${y * 30 - 15}px)`;
                planet.style.transform = `translate(${x * -20 + 10}px, ${y * -20 + 10}px)`;
            });
        }
        
        function setupSmoothScrolling() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }
        
        function setupForm() {
            const form = document.getElementById('contact-form');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                
                // Here you would typically send the data to a server
                console.log({ name, email, message });
                
                // Show a cosmic confirmation
                alert(`🌌 Message transmitted across the cosmos, ${name}! I'll respond via quantum entanglement soon.`);
                
                // Reset form
                form.reset();
            });
        }
        
        function setupParallax() {
            const nebula = document.getElementById('nebula');
            const planet = document.getElementById('planet');
            
            window.addEventListener('scroll', function() {
                const scrollPosition = window.pageYOffset;
                
                // Move elements at different speeds for parallax effect
                nebula.style.transform = `translateY(${scrollPosition * 0.2}px)`;
                planet.style.transform = `translateY(${scrollPosition * -0.1}px)`;
            });
        }
        
        // Bonus: Create a shooting star occasionally
        function createShootingStar() {
            const shootingStar = document.createElement('div');
            shootingStar.className = 'shooting-star';
            
            // Position at random edge
            const startX = Math.random() > 0.5 ? -50 : window.innerWidth + 50;
            const startY = Math.random() * window.innerHeight;
            
            shootingStar.style.left = `${startX}px`;
            shootingStar.style.top = `${startY}px`;
            
            // Random angle
            const angle = Math.random() * 30 + 15;
            const length = Math.random() * 100 + 100;
            
            document.body.appendChild(shootingStar);
            
            // Animate
            const animation = shootingStar.animate([
                { 
                    transform: `translate(0, 0) rotate(${angle}deg)`,
                    opacity: 0
                },
                { 
                    transform: `translate(${startX > 0 ? -length : length}px, ${length}px) rotate(${angle}deg)`,
                    opacity: 1,
                    offset: 0.2
                },
                { 
                    transform: `translate(${startX > 0 ? -length * 2 : length * 2}px, ${length * 2}px) rotate(${angle}deg)`,
                    opacity: 0
                }
            ], {
                duration: 2000,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            });
            
            animation.onfinish = () => {
                shootingStar.remove();
                
                // Schedule next shooting star
                setTimeout(createShootingStar, Math.random() * 10000 + 5000);
            };
        }
        
        // Start shooting star animation after a delay
        setTimeout(createShootingStar, 5000);