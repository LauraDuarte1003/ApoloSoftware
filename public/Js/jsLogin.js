const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function toggleFichaInput() {
    var tipoUsuario = document.getElementById("tipoUsuario").value;
    var fichaInput = document.getElementById("ficha");

    // Si el tipo de usuario seleccionado es "Aprendiz", muestra y hace obligatorio el campo de entrada de la ficha, de lo contrario, ocúltalo y desmarcarlo como obligatorio.
    if (tipoUsuario === "aprendiz") {
        fichaInput.style.display = "block";
        fichaInput.setAttribute("required", true);
    } else {
        fichaInput.style.display = "none";
        fichaInput.removeAttribute("required");
    }
}
