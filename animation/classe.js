document.addEventListener('DOMContentLoaded', () => {
    // Efeito de chamas nos cards
    const cards = document.querySelectorAll('.classe-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', x);
            card.style.setProperty('--mouse-y', y);
            
            // Efeito de distorção térmica
            card.querySelectorAll('h2, p, li').forEach(text => {
                text.style.transform = `translate(
                    ${(x - rect.width/2) * 0.01}px, 
                    ${(y - rect.height/2) * 0.01}px
                )`;
            });
        });
        
        card.addEventListener('mouseleave', () => {
            card.querySelectorAll('h2, p, li').forEach(text => {
                text.style.transform = 'none';
            });
        });
    });

    // Efeito de digitação com variação
    const keywords = document.querySelectorAll('.keyword');
    keywords.forEach((keyword, i) => {
        const text = keyword.textContent;
        keyword.textContent = '';
        
        let j = 0;
        const typing = setInterval(() => {
            if (j < text.length) {
                keyword.textContent += text[j];
                j++;
                // Efeito de tecla aleatória
                keyword.style.transform = `translateY(${Math.random() * 5}px)`;
            } else {
                clearInterval(typing);
                keyword.style.transform = 'none';
            }
        }, 100 + Math.random() * 100);
    });

    // Efeito de tremulação nas barras
    const bars = document.querySelectorAll('.stat-bar .bar');
    bars.forEach(bar => {
        setInterval(() => {
            const fluctuation = Math.random() * 5;
            bar.style.height = `calc(20px + ${fluctuation}px)`;
        }, 300);
    });
});