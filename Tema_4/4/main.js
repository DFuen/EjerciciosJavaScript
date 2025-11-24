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
    
    if(!RegexFechaNacimiento.test(fechaNacimiento.value)){
        document.getElementById("error_fecha_nacimiento").innerHTML="Error";
    }
    else{
        document.getElementById("error_fecha_nacimiento").innerHTML="Bien";
    }
    RegexTelefono=/^\+\d{2,3}-\d{9}$/;
    telefono=document.getElementById("telefono");
    
    if(! RegexTelefono.test(telefono.value)){
        document.getElementById("error_telefono").innerHTML="Error";
    }
    else{
        document.getElementById("error_telefono").innerHTML="Bien";
    }

    RegexEdadCategoria=/^(nino|adulto|jubilado)$/;
    telefono=document.getElementById("edad_categoria");
    
    if(!RegexEdadCategoria.test(edad_categoria.value)){
        document.getElementById("error_edad_categoria").innerHTML="Error";
    }
    else{
        document.getElementById("error_edad_categoria").innerHTML="Bien";
    }
    
}
const mostrarExtra=()=>{
    checked=document.getElementById("club_ski");
    contenerorMostrar=document.getElementById("club_adicional_contenedor");

    /*COMPROBADOR PARA MOSTRAR LA INFORMACIÓN ADICIONAL*/

    if(checked.checked){
        contenerorMostrar.style.display="block";
    }
    else{
        contenerorMostrar.style.display="none";
    }
}
/*CONTADORES*/

let contador1=document.getElementById("marcador1");
let contador2=document.getElementById("marcador2");/*Marcador con reset*/

