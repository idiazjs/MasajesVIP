document.addEventListener('DOMContentLoaded', () => {
    // Cargar el header desde la raíz
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            // Reasignar el evento del menú después de cargar el header
            document.getElementById('menu-toggle').addEventListener('click', () => {
                const mobileMenu = document.getElementById('mobile-menu');
                mobileMenu.classList.toggle('hidden');
            });
        })
        .catch(error => console.error('Error al cargar el header:', error));
});