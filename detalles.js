// Función para añadir una animación de entrada suave a los elementos al cargarse
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const githubBtn = document.querySelector('.github-btn');

    // Animación de fade-in para el contenedor principal
    container.style.opacity = '0';
    githubBtn.style.opacity = '0';
    
    setTimeout(() => {
        container.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 200);

    setTimeout(() => {
        githubBtn.style.transition = 'opacity 1.2s ease-out';
        githubBtn.style.opacity = '1';
    }, 400);
});

// Función para generar un efecto visual al presionar el botón de generar código
const botonGenerar = document.getElementById('generarBtn');
botonGenerar.addEventListener('mousedown', () => {
    botonGenerar.style.transform = 'scale(0.95)'; // Pequeña reducción de tamaño al hacer clic
    botonGenerar.style.boxShadow = '0px 2px 5px rgba(0, 0, 0, 0.5)';
});
botonGenerar.addEventListener('mouseup', () => {
    botonGenerar.style.transform = 'scale(1)';
    botonGenerar.style.boxShadow = '0px 5px 10px rgba(0, 0, 0, 0.2)';
});

// Animaciones más suaves y una mejor experiencia al generar el código
botonGenerar.addEventListener('click', () => {
    const codigoDisplay = document.getElementById('codigoGenerado');
    const nuevoCodigo = generarCodigo(); // Supongo que ya tienes esta función en codigos.js

    // Animación de fade-out para ocultar el código antiguo
    codigoDisplay.style.transition = 'opacity 0.3s ease';
    codigoDisplay.style.opacity = '0';

    setTimeout(() => {
        // Cambio del código y aplicación de animación de fade-in
        codigoDisplay.textContent = nuevoCodigo;
        codigoDisplay.style.opacity = '1';
        codigoDisplay.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        codigoDisplay.style.transform = 'scale(1.05)';
        
        setTimeout(() => {
            codigoDisplay.style.transform = 'scale(1)'; // Vuelve al tamaño original
        }, 500);
    }, 300);
});

// Efecto de "onda" en el botón al hacer clic
botonGenerar.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    document.body.appendChild(ripple);

    // Posición de la onda
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;

    // Animación de expansión
    ripple.style.animation = 'rippleEffect 1s ease-out';

    // Eliminar la onda después de la animación
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
});

// Agrega animaciones de ondas en los botones
const rippleEffect = document.createElement('style');
rippleEffect.innerHTML = `
    @keyframes rippleEffect {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(4); opacity: 0; }
    }

    .ripple {
        position: absolute;
        width: 100px;
        height: 100px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        pointer-events: none;
    }
`;
document.head.appendChild(rippleEffect);
