document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionamos los elementos del DOM
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navbarMenu = document.getElementById('navbar-menu');
    const menuLinks = document.querySelectorAll('.navbar__link');

    // 2. Función para abrir/cerrar el menú
    menuBtn.addEventListener('click', () => {
        navbarMenu.classList.toggle('is-active');
    });

    // 3. Función para cerrar el menú cuando hacemos click en un enlace
    // (Muy importante para que al navegar a una sección no se quede el menú tapando la pantalla)
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.remove('is-active');
        });
    });
});

// ==========================================
// INTERSECTION OBSERVER (Animaciones al scroll)
// ==========================================
const revealElements = document.querySelectorAll('.reveal');

const observerOptions = {
    root: null, // Hace referencia al *viewport* (la pantalla del navegador)
    threshold: 0.15, // El efecto se dispara cuando el 15% de la sección ya ha entrado en la pantalla
    rootMargin: "0px 0px -50px 0px" // Un pequeño margen inferior para que no se dispare milímetros antes de verlo
};

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Una vez que aparece, dejamos de vigilarlo para ahorrar memoria RAM al usuario
        }
    });
}, observerOptions);

revealElements.forEach(element => {
    scrollObserver.observe(element);
});