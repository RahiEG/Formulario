const form = document.getElementById("formRegistro");
const username = document.getElementById("username");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");

const errorUser = document.getElementById("errorUser");
const errorPass = document.getElementById("errorPass");

form.addEventListener("submit", function (event) {

  event.preventDefault();

  errorUser.textContent = "";
  errorPass.textContent = "";
  errorPass.style.color = "red";

  let hayError = false;

  if (username.value.trim().length < 5) {
    errorUser.textContent = "El usuario debe tener al menos 5 caracteres.";
    hayError = true;
  }

  if (pass1.value !== pass2.value) {
    errorPass.textContent = "Las contraseñas no coinciden.";
    hayError = true;
  }

  if (!hayError) {
    errorPass.style.color = "green";
    errorPass.textContent = "Registro exitoso";
  }
  
  setTimeout(() => {
    errorUser.textContent = "";
    errorPass.textContent = "";
  }, 2000);

});