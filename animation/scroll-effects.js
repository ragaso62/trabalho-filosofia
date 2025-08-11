document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    let delay = 0;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    
                    // Efeito de brilho no título
                    const title = entry.target.querySelector('h2');
                    if (title) {
                        title.style.animation = `textGlow 2s 0.5s forwards`;
                    }
                }, delay);
                
                // Aumenta o delay para o próximo card
                delay += 300;
            }
        });
    }, { 
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });

    cards.forEach(card => {
        observer.observe(card);
    });

    // Efeito de parallax dinâmico
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        cards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const speed = index * 0.1;
            card.style.backgroundPositionY = `${-scrollPosition * speed}px`;
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    
    function updateMenuPosition() {
        const footerRect = footer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const distanceToFooter = footerRect.top - viewportHeight;
        
        if (window.scrollY > 100) {
            header.classList.remove('header-top');
            
            // Se estiver a menos de 300px do footer
            if (distanceToFooter < 300) {
                header.classList.add('header-near-footer');
                header.classList.remove('header-scrolled');
            } else {
                header.classList.add('header-scrolled');
                header.classList.remove('header-near-footer');
            }
        } else {
            header.classList.remove('header-scrolled', 'header-near-footer');
            header.classList.add('header-top');
        }
    }
    
    window.addEventListener('scroll', updateMenuPosition);
    window.addEventListener('resize', updateMenuPosition);
    
    // Inicializa
    updateMenuPosition();
        
    // Ativar link atual
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
        
        // Efeito hover
        link.addEventListener('mouseenter', () => {
            link.style.color = 'var(--accent-neon)';
            link.style.textShadow = '0 0 10px var(--accent-neon)';
        });
        
        link.addEventListener('mouseleave', () => {
            if (!link.classList.contains('active')) {
                link.style.color = 'var(--text-primary)';
                link.style.textShadow = 'none';
            }
        });
    });
});

// Efeito de entrada dos cards
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    
    // Atribui ordem de animação
    cards.forEach((card, index) => {
        card.style.setProperty('--order', index);
        
        // Efeito de acompanhamento do mouse
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
    
    // Intersection Observer para animação
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", () => {
    // Efeito de digitação para palavras-chave
    document.querySelectorAll('.keyword').forEach(keyword => {
        const originalText = keyword.textContent;
        keyword.textContent = '';
        
        let i = 0;
        const typing = setInterval(() => {
            if (i < originalText.length) {
                keyword.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 100);
    });
    
    // Efeito de brilho aleatório
    setInterval(() => {
        const keywords = document.querySelectorAll('.keyword');
        const randomIndex = Math.floor(Math.random() * keywords.length);
        keywords[randomIndex].style.animation = 'pulseText 0.5s';
        
        setTimeout(() => {
            keywords[randomIndex].style.animation = 'pulseText 2s infinite alternate';
        }, 500);
    }, 3000);
});