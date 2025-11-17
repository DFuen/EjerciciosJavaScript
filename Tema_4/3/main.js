let fecha =document.getElementById("fecha");
const formatoFecha=/^(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2})$/;
document.getElementById("comprFecha").addEventListener("click", comprobarFecha);

function comprobarFecha(){
    if(!formatoFecha.test(fecha.value)){
        document.getElementById("error").innerHTML="Error";
    }
    else{
        document.getElementById("error").innerHTML="";
    }
}