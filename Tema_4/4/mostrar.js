checked=document.getElementById("club_ski");
contenerorMostrar=document.getElementById("club_adicional_contenedor");

const mostrarExtra=()=>{

    /*COMPROBADOR PARA MOSTRAR LA INFORMACIÓN ADICIONAL*/

    if(checked.checked){
        contenerorMostrar.style.display="block";
    }
    else{
        document.getElementById("mensaje").innerHTML="Rellena los campos anteriores antes de marcar Club";
        contenerorMostrar.style.display="none";
    }

    RegexNombreClub=/^[A-Za-z]*$/;
    RegexNumeroClub=/^\d{10}$/;
    let nombreClub=document.getElementById("nombre_club");
    let numeroClub=document.getElementById("num_licencia");

    if(RegexNombreClub.test(nombre_club.value) &&
        RegexNumeroClub.test(num_licencia.value)){
            correcto=true;
        }
        else{
            correcto=false;
        }

}