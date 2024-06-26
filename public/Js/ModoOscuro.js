const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

// Función para mostrar u ocultar el menú lateral
function toggleSideMenu() {
  sideMenu.style.display = sideMenu.style.display === 'none'? 'block' : 'none';
}

// Evento para el botón de menú
menuBtn.addEventListener('click', toggleSideMenu);

// Evento para el botón de cierre
closeBtn.addEventListener('click', toggleSideMenu);


//AQUI INICIA EL DARK MODE 
document.addEventListener('DOMContentLoaded', (event) => {
  // Seleccionamos el botón por su ID
  const toggleDarkMode = document.getElementById('toggleDarkMode');

  // Agregamos un controlador de eventos al botón
  toggleDarkMode.addEventListener('click', () => {
    // Alternamos la clase 'dark-mode-variables' en el body
    document.body.classList.toggle('dark-mode-variables');

    // Actualizamos el estado del botón para reflejar el cambio de modo
    const isDarkMode = document.body.classList.contains('dark-mode-variables');
    toggleDarkMode.querySelector('.active').classList.toggle('active');
    toggleDarkMode.querySelector('.material-icons-sharp').classList.toggle('active');
    toggleDarkMode.querySelector('.material-icons-sharp').classList.toggle('dark_mode');
    toggleDarkMode.querySelector('.material-icons-sharp').classList.toggle('light_mode');

    // Imprimimos en la consola si el modo oscuro está activado
    console.log(isDarkMode? 'Modo oscuro activado' : 'Modo oscuro desactivado');
  });
});



