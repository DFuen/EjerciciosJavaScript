document.getElementById("comprobar").addEventListener("click",comprobaciones);

var correcto=false;



function comprobaciones(){

    /*REGEX*/
    RegexIdentificador=/^[A-Za-z]{1}[0-9]{8}[A-Za-z]{1}$/;
    identificador=document.getElementById("identificador");

    
    RegexFechaNacimiento=/^\d{2}\/\d{2}\/\d{4}$/;
    fechaNacimiento=document.getElementById("fecha_nacimiento");

    RegexTelefono=/^\+\d{2,3}-\d{9}$/;
    telefono=document.getElementById("telefono");

    RegexNombreApellidos=/^[A-Za-z]*$/;
    nombreApellido=document.getElementById("nombre_apellidos");

    RegexEdadCategoria=/^(nino|adulto|jubilado)$/;
    edad_categoria=document.getElementById("edad_categoria");

    if(RegexIdentificador.test(identificador.value) &&
        RegexNombreApellidos.test(nombreApellido.value) &&
        RegexFechaNacimiento.test(fechaNacimiento.value) &&
        RegexTelefono.test(telefono.value) &&
        RegexEdadCategoria.test(edad_categoria.value)){
        correcto=true;
    }

    if(correcto){
        document.getElementById("mensaje").innerHTML="Todo Correcto";
        contadores();
    }
    else{
        document.getElementById("mensaje").innerHTML="Error";
    }

    if(checked.checked){
        contadoresski()
    }

}


