let contador = 1; 
const etiquetasIgnoradas = ["FIELDSET","DATALIST","KEYGEN","OUTPUT"];

const resultados = "resultado";
const formulario = "formularioJugadores";

function analizadorElementos(element,index){
    let output = '';
    const nombreElemento=element.tagName.toUpperCase();

    if(etiquetasIgnoradas.includes(nombreElemento)){
        return null;
    }

    const id = element.id || "vacio";
    const name=element.name || "vacio";
    const className= element.className || "vacio";

    const getAtrib=()=>{return `Clase: ${className} ID: ${id} Nombre: ${name}`};

    if(nombreElemento == 'INPUT'){
        const type= element.type || 'text';
        const value = element.value || 'vacio';
        output = `${index} INPUT Tipo: ${type} ${getAtrib()} Valor ${value}`;
    }
    else if(nombreElemento == 'TEXTAREA'){
        const value = element.value || 'vacio';
        output = `${index} TEXTAREA ${getAtrib()} Valor ${value}`;
    }
    else if(nombreElemento == 'BUTTON'){
        const value = element.texContent.trim() || element.value || 'vacio';
        output = `${index} BUTTON  ${getAtrib()} Valor ${value}`;
    }
    else if(nombreElemento == 'LABEL'){
        const htmlFor = element.htmlFor || 'vacio';
        output = `${index} LABEL ${getAtrib()} Valor ${htmlFor}`;
    }
    else if(nombreElemento == 'SELECT'){
        const opciones=Array.from(element.options).map(opt=>{
            return opt.value || opt.textContent.trim();
        }).filter(v => v.length > 0).join('; ');

        output = `${index} SELECT ${getAtrib()} Opciones: ${opciones || 'vacio'}`;
    }
    else{
        return null;
    }
    return output;
}
    const GenerarResultado=(node, resultados)=>{
        const stack = Array.from(node.children).reverse();

        while (stack.length >0){
            const child = stack.pop();

            const analizadorResultado = analizadorElementos(child, contador);
            if(analizadorResultado){
                const p = document.createElement('p');
                p.textContent = analizadorResultado;
                resultados.appendChild(p);
                contador++
            }
            if (child.tagName.toUpperCase() !== 'SELECT' && child.children.length > 0) {
            const grandchildren = Array.from(child.children).reverse();
            stack.push(...grandchildren);
            }
        }
    }

function analizarFormulario(formulario,resultados){
    const formulario = document.getElementById(formulario);
    const resultados = document.getElementById(resultados);
    resultados.innerHTML = '';
    contador = 1;
    GenerarResultado();  
}

document.getElementById("analizador").addEventListener("click",analizarFormulario);
