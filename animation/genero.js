document.addEventListener('DOMContentLoaded', () => {
    // Efeito de accordion para as soluções
    const solutionTitles = document.querySelectorAll('.solution-title');
    
    solutionTitles.forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            const isOpen = content.style.maxHeight;
            
            // Fecha todos primeiro
            document.querySelectorAll('.solution-content').forEach(item => {
                item.style.maxHeight = null;
                item.previousElementSibling.classList.remove('active');
            });
            
            // Abre o selecionado se não estiver aberto
            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + 'px';
                title.classList.add('active');
            }
        });
    });
    
    // Abre o primeiro por padrão
    if (solutionTitles.length > 0) {
        solutionTitles[0].click();
    }
    
    // Efeito de hover nos ícones de gênero
    const genderIcons = document.querySelectorAll('.gender-icon');
    genderIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.textShadow = '0 0 15px var(--accent-neon)';
            icon.style.transform = 'scale(1.3)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.textShadow = 'none';
            icon.style.transform = 'scale(1)';
        });
    });

    // Efeito especial para os cards da página de gênero
    const cards = document.querySelectorAll('.genero-page .card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
            
            // Efeito de brilho dinâmico
            const glow = card.querySelector('.card-glow');
            if (glow) {
                glow.style.left = `${x}px`;
                glow.style.top = `${y}px`;
            }
        });
    });
});

// Observador para animar quando o elemento entra na tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Observa todos os elementos animáveis
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
    // Configura a roda de soluções
    const wheel = document.querySelector('.solutions-wheel');
    const solutions = document.querySelectorAll('.solution');
    
    // Posiciona os itens dinamicamente
    solutions.forEach((solution, index) => {
        const angle = (index * 120) * (Math.PI / 180); // Converte para radianos
        const radius = 82; // Raio da roda
        
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        solution.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
    
    // Animação ao aparecer na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.solution').forEach(el => {
        observer.observe(el);
    });
});