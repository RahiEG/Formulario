const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        let nombre = document.getElementById("nombre").value;
        let password = document.getElementById("password").value;

        if (nombre !== "" && password.length >= 8) {
            formulario.style.backgroundColor = "#d4edda";
            document.getElementById("mensaje-ok").textContent="¡Formulario enviado correctamente!"
            setTimeout(()=>{
                formulario.style.background="none"
                formulario.style.transition="2s"
                 document.getElementById("mensaje-ok").textContent=""
            },2000);
            formulario.elements["nombre"].value=""
            formulario.elements["password"].value=""
            formulario.elements["nombre"].focus();
        } else {
            
            formulario.style.backgroundColor = "#f8d7da";
             document.getElementById("mensaje-error").textContent="La contraseña debe contener al menos 8 caracteres"
             setTimeout(()=>{
                formulario.style.background="none"
                formulario.style.transition="2s"
                document.getElementById("mensaje-error").textContent=""
            },2000);
            formulario.elements["nombre"].focus();

        }
    })

