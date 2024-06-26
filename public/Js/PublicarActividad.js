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

  // Modal functionality
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("openModalBtn");
  const span = document.getElementsByClassName("close")[0];

  // Cuando el usuario haga clic en el botón, abre el modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // Cuando el usuario haga clic en la X, cierra el modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Cuando el usuario haga clic fuera del modal, cierra el modal
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});
