/*const aside = document.getElementById('aside'),
    menu = document.getElementById('menu');

menu.onclick = () => aside.classList.toggle('active');*/

// Primero, selecciona todos los enlaces de la barra lateral
var sidebarLinks = document.querySelectorAll('.aside .options a');

// Ahora, para cada enlace en la barra lateral, agrega un evento de clic
for (var i = 0; i < sidebarLinks.length; i++) {
    sidebarLinks[i].addEventListener('click', function(event) {
        // Cuando se hace clic en el enlace, cambia la clase del sidebar
        aside.classList.toggle('active');
        // Evita que el evento se propague al icono de barras
        event.stopPropagation();
    });
}

// Luego, selecciona el icono de barras
var menuIcon = document.getElementById('menu');

// Ahora, agrega un evento de clic al icono de barras
menuIcon.addEventListener('click', function() {
    // Cuando se hace clic en el icono, verifica si el sidebar tiene la clase 'active'
    if (aside.classList.contains('active')) {
        // Si el sidebar está activo (cerrado), remueve la clase 'active' para abrirlo
        aside.classList.remove('active');
    } else {
        // Si el sidebar no está activo (abierto), agrega la clase 'active' para cerrarlo
        aside.classList.add('active');
    }
});