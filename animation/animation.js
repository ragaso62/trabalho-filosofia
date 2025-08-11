document.addEventListener("DOMContentLoaded", () => {
    // Efeito de digitação no título
    const title = document.querySelector('h1');
    if (title) {
        const originalText = title.textContent;
        title.textContent = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < originalText.length) {
                title.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);
    }

    // Efeito de hover nos botões
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Efeito de parallax sutil
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        document.querySelector('main').style.transform = `translate(${x}px, ${y}px)`;
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