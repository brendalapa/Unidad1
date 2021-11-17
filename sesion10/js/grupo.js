function dato(){
    var Nombres = document.getElementById("Nombres").value;
    var Apellidos = document.getElementById("Apellidos").value;
    var Email = document.getElementById("Email").value;
    var FechaNacimiento = document.getElementById("FechaNacimiento").value;
    var f = document.getElementById("f").checked;
    var m = document.getElementById("m").checked;
    var Estatura = document.getElementById("Estatura").value;
    var Peso = document.getElementById("Peso").value;
    var Deporte = document.getElementById("Deporte").checked;

    var mensaje = "Nombres: " + Nombres 
    +"\nApellidos: " + Apellidos
    +"\nCorreo Electrónico: " + Email
    +"\nFecha de nacimiento: " + FechaNacimiento
    +"\nEs mujer: " + f
    +"\nEs hombre: " + m
    +"\nEstatura: " + Estatura + "cm"
    +"\nPeso: " + Peso + "kg"
    +"\nHace deporte: " + Deporte
    console.log(mensaje);
}
