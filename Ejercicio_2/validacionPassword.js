const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        let nombre = document.getElementById("nombre").value;
        let password = document.getElementById("password").value;

        if (nombre !== "" && password.length >= 8) {
            formulario.style.backgroundColor = "green";
        } else {
            formulario.style.backgroundColor = "red";
        }
    });
