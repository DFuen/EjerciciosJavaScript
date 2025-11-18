/*EVENTOS PARA CADA UNO DE LOS ELEMENTOS*/
document.getElementById("comprFecha").addEventListener("click", validar);
document.getElementById("comprCocinero").addEventListener("click", validar);
document.getElementById("comprDestinatario").addEventListener("click", validar);
document.getElementById("comprGramos").addEventListener("click", validar);
document.getElementById("comprComposicion").addEventListener("click", validar);
document.getElementById("comprCuenta").addEventListener("click", validar);


/*FUNCION GENERAL*/
function validar(event){
    let id = event.target.id;
    let datos;
    /*ATRIBUTOS GENERALES*/
    let error;
    let correcto;
    let formato;
    /*ATRIBUTOS PARA CUENTA DE EEUU*/
    let abecedario=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let letras=[];
    let validate;

    /*SWITCH PARA CADA UNO DE LAS COMPROBACIONES*/
    switch(id){
        case "comprFecha":
            datos=document.getElementById("fecha");
            error=document.getElementById("error_fecha");
            correcto=document.getElementById("correcto_fecha")
            formato=/^(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2})$/;
        break;
        case "comprCocinero":
            datos=document.getElementById("cocinero");
            error=document.getElementById("error_cocinero");
            correcto=document.getElementById("correcto_cocinero")
            formato=/^[A-Z]{2}\W[0-9]{4}$/;
        break;
        case "comprDestinatario":
            datos=document.getElementById("destinatario");
            error=document.getElementById("error_destinatario");
            correcto=document.getElementById("correcto_destinatario")
            formato=/^[A-Z]{2,3}_[a-z]+:[0-9]{4}$/;
        break;
        case "comprGramos":
            datos=document.getElementById("gramos");
            error=document.getElementById("error_gramos");
            correcto=document.getElementById("correcto_gramos")
            formato=/^(1000|[1-4][0-9]{3}|5000)$/;
        break;
        case "comprComposicion":
            datos=document.getElementById("composicion");
            error=document.getElementById("error_composicion");
            correcto=document.getElementById("correcto_composicion");
            formato=/^[0-9]+g([A-Z]{1,2}[0-9]?){2}$/;
        break;
        case "comprCuenta":
            datos=document.getElementById("cuenta");
            error = document.getElementById("error_cuenta");
            correcto = document.getElementById("correcto_cuenta");
            
            mensaje=document.getElementById("cuenta").value;
            mensaje=mensaje.replace(/-/g,"");

            /*COMPROBACION 2 letras*/
            letras[0]=document.getElementById("cuenta").value.substring(0,1);
            letras[1]=document.getElementById("cuenta").value.substring(1,2);

            /*COMPROBAR EL NUMERO DE LA LETRA */
            let compnumero;
            compnumero=document.getElementById("cuenta").value.substring(2,4);
            compnumero=parseInt(compnumero);

            /*COMPROBAR LOS PAR DE 6 NUMEROS*/
            let primerosSeis,segundosSeis;
            primerosSeis=document.getElementById("cuenta").value.substring(5,11);
            segundosSeis=document.getElementById("cuenta").value.substring(11,17);

            let compnumero2;
            compnumero2=document.getElementById("cuenta").value.substring(18,20);

            /*FUNCION FLECHA PARA HACER MENOS REPETITIVO EL CODIGO Y 
            SUMAR LOS 6 NUMEROS ESTO TERMINA SACANDO UN STRING PARA CONCATENARLO
            */
            const suma=(numeros)=>{
                let suma=0;
                for(let i=0;i<numeros.length;i++){
                suma+=parseInt(numeros.charAt(i),10);
                }
                return parseInt(suma/6).toString();
            }
            let =control1 = suma(primerosSeis);
            let =control2 = suma(segundosSeis);
            let control=control1+control2;

            /*BUCLE PARA EL ABECEDARIO Y SACAR EL VALOR*/
            let digitos=0;
            for(let i=0;i<letras.length;i++){
                for(let k=0;k<abecedario.length;k++){
                    if(abecedario[k]==letras[i].toUpperCase()){
                        digitos+=k+1;
                    }
                }
            }
            /*VALIDAMOS TODO Y SACAMOS MENSAJE DE CONFIRMACIÓN COMO CORRECTO O NO*/
            validate = (digitos == compnumero && control == compnumero2);
            formato=/^[A-Z]{2}[0-9]{2}-[0-9]{12}-[0-9]{2}$/;
        break;
    }
    /*CONDICIONAL PARA SACAR LOS MENSAJES DE ERROR*/
    if(!formato.test(datos.value)){
        error.innerHTML="Error en el formato";
        correcto.innerHTML="";
    }
    else{
        /*COMPRUEBA EL ID DE LA CUENTA Y SI ES VALIDO PARA SACAR EL MENSAJE PERSONALIZADO*/
        if(id === "comprCuenta" && validate){
            correcto.innerHTML = mensaje; 
            error.innerHTML = "";
        }
        else if(id === "comprCuenta"){
            error.innerHTML = "Datos incorrectos";
            correcto.innerHTML = "";
        }
        else {
        correcto.innerHTML="Bien";
        error.innerHTML="";
        }
    }
}
