
        function scrollToSlide(slideNumber) {
            const slide = document.getElementById('slide-' + slideNumber);
            if (slide) {
                slide.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        // Animation des barres de progression
        window.addEventListener('load', function() {
            const progressBars = document.querySelectorAll('.progress-fill');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 1000);
            });
        });

        // Animation d'apparition des slides
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.slide').forEach(slide => {
            observer.observe(slide);
        });

        // Effet de particules pour le background
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '2px';
            particle.style.height = '2px';
            particle.style.background = 'rgba(255,255,255,0.3)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '-5px';
            particle.style.zIndex = '1';
            
            document.body.appendChild(particle);
            
            const animationDuration = Math.random() * 3000 + 2000;
            particle.animate([
                { transform: 'translateY(-10px)', opacity: 0 },
                { transform: 'translateY(20px)', opacity: 1 },
                { transform: `translateY(${window.innerHeight + 10}px)`, opacity: 0 }
            ], {
                duration: animationDuration,
                easing: 'linear'
            }).onfinish = () => particle.remove();
        }

        // Créer des particules périodiquement
        setInterval(createParticle, 300);

        // Smooth scrolling pour la navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1.1)';
                }, 150);
            });
        });