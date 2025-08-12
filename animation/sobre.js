document.addEventListener("DOMContentLoaded", () => {
    const quadro = document.querySelector('.fontes-quadro');

    if (!quadro) return;

    // Observer para animação de entrada
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                quadro.classList.add('animated');
            }
        });
    }, { threshold: 0.3 });

    observer.observe(quadro);

    // Animação suave de gradiente pulsando
    let gradientShift = 0;
    function animateGradient() {
        gradientShift += 0.5; // velocidade
        quadro.style.backgroundPosition = `${gradientShift}% 50%`;

        if (gradientShift >= 200) gradientShift = 0;
        requestAnimationFrame(animateGradient);
    }

    animateGradient();

    // Hover mais fluido nos cards
    document.querySelectorAll('.fonte-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
            card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});
