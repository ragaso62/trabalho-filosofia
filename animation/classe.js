document.addEventListener('DOMContentLoaded', function() {
    // Função para forçar a exibição inicial
    function forceVisible() {
        document.querySelectorAll('.classe-card').forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
        
        document.querySelectorAll('.stat-bar').forEach(bar => {
            bar.style.opacity = '1';
            bar.style.transform = 'translateX(0)';
            const barFill = bar.querySelector('.bar');
            if (barFill) {
                barFill.style.width = bar.style.getPropertyValue('--percentage');
            }
        });
        
        document.querySelectorAll('.solutions-wheel .solution, .solutions-wheel .center-circle').forEach(el => {
            el.classList.add('animated');
        });
    }

    // Configura o Intersection Observer como fallback
    function setupObservers() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    
                    if (entry.target.classList.contains('stat-bar')) {
                        const bar = entry.target.querySelector('.bar');
                        if (bar) {
                            bar.style.width = entry.target.style.getPropertyValue('--percentage');
                        }
                    }
                    
                    if (entry.target.classList.contains('solutions-wheel')) {
                        const solutions = entry.target.querySelectorAll('.solution');
                        const center = entry.target.querySelector('.center-circle');
                        
                        solutions.forEach((sol, index) => {
                            setTimeout(() => {
                                sol.classList.add('animated');
                            }, index * 200);
                        });
                        
                        if (center) {
                            setTimeout(() => {
                                center.classList.add('animated');
                            }, solutions.length * 200);
                        }
                    }
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.classe-card, .stat-bar, .solutions-wheel').forEach(el => {
            observer.observe(el);
        });
    }

    // Efeito gradiente dinâmico
    function setupHoverEffects() {
        document.querySelectorAll('.classe-card').forEach(card => {
            const gradient = card.querySelector('.hover-gradient');
            if (!gradient) return;
            
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
                
                gradient.style.left = `${x}px`;
                gradient.style.top = `${y}px`;
            });
        });
    }

    // Inicializa tudo
    forceVisible(); // Garante que tudo esteja visível
    setupObservers(); // Configura os observadores
    setupHoverEffects(); // Ativa os efeitos de hover

    // Fallback adicional
    setTimeout(() => {
        forceVisible();
    }, 1000);
});

// Dentro do seu observer para solutions-wheel
if (entry.target.classList.contains('solutions-wheel')) {
    const solutions = entry.target.querySelectorAll('.solution');
    const center = entry.target.querySelector('.center-circle');
    
    solutions.forEach((sol, index) => {
        setTimeout(() => {
            sol.style.opacity = '1';
            sol.style.transform = 'scale(1)';
            
            // Garante que o texto fique visível
            const text = sol.querySelector('p');
            if (text) {
                text.style.opacity = '1';
                text.style.visibility = 'visible';
            }
        }, index * 200);
    });
    
    if (center) {
        setTimeout(() => {
            center.style.opacity = '1';
        }, solutions.length * 200);
    }
}