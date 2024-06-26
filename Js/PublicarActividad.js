// Toggle de la barra lateral
const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('sidebar-toggle-btn');
const closeBtn = document.getElementById('sidebar-close-btn');

function toggleSideMenu() {
  sideMenu.style.display = sideMenu.style.display === 'none' ? 'block' : 'none';
}

menuBtn.addEventListener('click', toggleSideMenu);
closeBtn.addEventListener('click', toggleSideMenu);

// Modo oscuro
document.addEventListener('DOMContentLoaded', (event) => {
  const toggleDarkMode = document.getElementById('dark-mode-toggle');

  toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');

    // Actualizar iconos del botón
    const isDarkMode = document.body.classList.contains('dark-mode-variables');
    toggleDarkMode.querySelector('.active').classList.toggle('active');
    toggleDarkMode.querySelectorAll('.material-icons-sharp').forEach(icon => {
      icon.classList.toggle('active');
      icon.classList.toggle('dark_mode');
      icon.classList.toggle('light_mode');
    });

    console.log(isDarkMode ? 'Modo oscuro activado' : 'Modo oscuro desactivado');
  });
});
