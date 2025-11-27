/*CONTENEDOR DONDE CREAR LAS TARJETAS*/
const contenedor=document.getElementById("tarjetasCreadas");
/*ELEMENTOS DE LAS TARJETAS*/

/*CREAR ESCUCHADOR CLICK*/
document.getElementById("crear").addEventListener("click",crearTarjeta);

function crearTarjeta(){
    let titulo=document.getElementById("titulo");
    let url=document.getElementById("url");
    let texto=document.getElementById("texto");
    let valorTitulo = titulo.value;
    let valorUrl = url.value;
    let valorTexto = texto.value;

    let contenedorBase =`
        <div id="content-imagen">
            <div class="imagenes">
                <img src="${valorUrl}">
                <span class="nombre">${valorTitulo}</span>
                <span class="nombre">${valorTexto}</span>
            </div>
        </div>
    `;
    contenedor.innerHTML+=contenedorBase;
}