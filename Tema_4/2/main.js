document.getElementById("comprobar").addEventListener("click",comprobaciones);


function comprobaciones(){
    /*REGEX*/
    RegexIdentificador=/^[A-Za-z]{1}[0-9]{8}[A-Za-z]{1}$/;
    identificador=document.getElementById("identificador");
    
    if(!RegexIdentificador.test(identificador.value)){
        document.getElementById("error_identificador").innerHTML="Error";
    }
    else{
        document.getElementById("error_identificador").innerHTML="Bien";
    }

    RegexNombreApellidos=/^[A-Za-z]*$/;
    nombreApellido=document.getElementById("nombre_apellidos");
    
    if(!RegexNombreApellidos.test(nombreApellido.value)){
        document.getElementById("error_nombre_apellidos").innerHTML="Error";
    }
    else{
        document.getElementById("error_nombre_apellidos").innerHTML="Bien";
    }

    RegexFechaNacimiento=/^\d{2}\/\d{2}\/\d{4}$/;
    fechaNacimiento=document.getElementById("fecha_nacimiento");
    
    if(!RegexNombreApellidos.test(fechaNacimiento.value)){
        document.getElementById("error_fecha_nacimiento").innerHTML="Error";
    }
    else{
        document.getElementById("error_fecha_nacimiento").innerHTML="Bien";
    }
    RegexTelefono=/^\+\d{2,3}-\d{9}$/;
    telefono=document.getElementById("fecha_nacimiento");
    
    if(!RegexNombreApellidos.test(telefono.value)){
        document.getElementById("error_telefono").innerHTML="Error";
    }
    else{
        document.getElementById("error_telefono").innerHTML="Bien";
    }
    
}