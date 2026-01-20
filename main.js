document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Configuración de Animaciones de Aparición (Scroll Reveal)
    var observerOptions = {
        threshold: 0.1
    };

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Seleccionamos todos los elementos con la clase 'reveal' y los observamos
    var revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(function(el) {
        observer.observe(el);
    });

    // 2. Lógica del Menú Hamburguesa para Móviles
    var menuToggle = document.querySelector('.menu-toggle');
    var navLinks = document.querySelector('.nav-links');
    var links = document.querySelectorAll('.nav-links a');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            var isActive = navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // Bloqueamos el scroll del cuerpo cuando el menú está abierto
            if (isActive) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Cerramos el menú automáticamente al hacer clic en cualquier enlace
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }

    console.log("Portfolio scripts loaded successfully.");
});