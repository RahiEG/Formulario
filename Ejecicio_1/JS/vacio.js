const nombre= document.getElementById("nombre");
const formulario= document.getElementById("registro");
const botonEnviar = document.getElementById("botonEnviar");

formulario.addEventListener("submit", function(evento){
evento.preventDefault();
const nombre = document.getElementById("nombre").value;
    if (nombre.trim===""){
        alert("El nombre es obligatorio")
    formulario.style.background="#FFBFBF"
    document.getElementById("nombre").value="";

    }else{
        alert(`Usuario ${nombre} registrado correctamente`);
    formulario.style.background="#CCFFCC"
     document.getElementById("nombre").value="";
    }

    this.submit();
});