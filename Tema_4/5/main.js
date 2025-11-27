let nombreD = document.getElementsByClassName("NombreD");
let SombrPaja = document.getElementsByClassName("SombreroDPaja");
let PeorGen = document.getElementsByClassName("PeorGen");
let yonkou = document.getElementsByClassName("yonkou");
let nombrePj = document.getElementsByClassName("nombre");

const todasColecciones=[nombreD,SombrPaja,PeorGen,yonkou];

document.getElementById("comprobarSombrero").addEventListener("click",comprSomb);
document.getElementById("comprobarGen").addEventListener("click",comprGen);
document.getElementById("comprobarNombre").addEventListener("click",comprNomD);
document.getElementById("comprobarYonkou").addEventListener("click",comprYonko);

function comprSomb(){
    limpiarB();
    for (let i = 0;i<SombrPaja.length;i++){
        SombrPaja[i].style.border = "5px solid yellow";
        SombrPaja[i].querySelector('.nombre').style.display = "block";
    }
}

function comprGen(){
    limpiarB();
    for (let i = 0;i<PeorGen.length;i++){
        PeorGen[i].style.border = "5px solid grey";
        PeorGen[i].querySelector('.nombre').style.display = "block";
    }
}

function comprNomD(){
    limpiarB();
    for (let i = 0;i<nombreD.length;i++){
        nombreD[i].style.border = "5px solid red";
        nombrePj[i].style.display ="block";
    }
}

function comprYonko(){
    limpiarB();
    for (let i = 0;i<yonkou.length;i++){
        yonkou[i].style.border = "5px solid green"
        nombrePj[i].style.display ="block";
    }
}

/*FUNCION PARA BORRAR LOS OTROS ESTILOS DE LAS OTRAS COLECCIONES*/

function limpiarB(){
    for(let coleccion of todasColecciones){
        for(let i = 0; i<coleccion.length; i++){
            coleccion[i].style.border="none";
            nombrePj[i].style.display="none";
        }
    }
}