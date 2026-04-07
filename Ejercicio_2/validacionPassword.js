const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        let nombre = document.getElementById("nombre").value;
        let password = document.getElementById("password").value;

        if (nombre !== "" && password.length >= 8) {
            formulario.style.backgroundColor = "green";
            setTimeout(()=>{
                formulario.style.background="none"
                formulario.style.transition="2s"
            },5000);
            formulario.elements["nombre"].value=""
            formulario.elements["password"].value=""
            formulario.elements["nombre"].focus();
        } else {
            
            formulario.style.backgroundColor = "red";
             setTimeout(()=>{
                formulario.style.background="none"
                formulario.style.transition="2s"
            },5000);
            formulario.elements["nombre"].focus();

        }
    })

