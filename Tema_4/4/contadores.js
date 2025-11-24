document.getElementById("reset").addEventListener("click",limpiarreg);


/*ATRIBUTOS CON LA FECHA DE AHORA Y INICIO DEL CONTADOR*/

let fechaHoy=new Date().toISOString().split("T")[0];  
var contador=0;
var contadorski=0;

/*CONTADORES*/

let contador1=document.getElementById("marcador1");/*Marcador NORMAL */
let contador2=document.getElementById("marcador2");/*Marcador SKI*/

const contadores=()=>{
    contador++;
    localStorage.setItem(fechaHoy+" normal",contador);
    contador1.innerHTML=contador;
}

const contadoresski=()=>{
        contadorski++;

        localStorage.setItem(fechaHoy+" ski",contadorski);
        contador2.innerHTML=contadorski;
}

function limpiarreg(){
    contadorski=0;
    contador2.innerHTML=0;
}
