const areatexto = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function mensajeEncriptado(){
    const mensajeEncriptado = encriptador(areatexto.value);//toma el valor de la caja de texto
    mensaje.value = mensajeEncriptado;//reemplaza
    areatexto.value = "";//limpia la caja
    mensaje.style.backgroundImage = "none";//quita imagen
}

function mensajeDesencriptado() {
    const mensajeEncriptado = desencriptador(areatexto.value);
    mensaje.value = mensajeEncriptado;
    areatexto.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptador(encriptado){
    let arrayconjuntos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    encriptado = encriptado.toLowerCase() //cambiar a minusculas

    for(let i = 0; i < arrayconjuntos.length; i++){//recorre el conjunto de arreglos
        if(encriptado.includes(arrayconjuntos[i][0])){//verifica los caracteres ingresados
            encriptado = encriptado.replaceAll(arrayconjuntos[i][0], arrayconjuntos[i][1])//reemplaza las letras
        }
    }
    return encriptado
}

function desencriptador(desencriptado) {
    let arrayconjuntos = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    desencriptado = desencriptado.toLowerCase()

    for (let i = 0; i < arrayconjuntos.length; i++) {
        if (desencriptado.includes(arrayconjuntos[i][1])) {
            desencriptado = desencriptado.replaceAll(arrayconjuntos[i][1], arrayconjuntos[i][0])
        }
    }
    return desencriptado
}

function copiar() {
    var mensajeCopiado = document.querySelector('.mensaje');
    var boton = document.querySelector('.btn-copiar');//selecciona el boton
    mensajeCopiado.select();//selecciona el texto
    document.execCommand('copy');//copia
    boton.textContent = "Copiado";//cambia texto boton

    setTimeout(function () {
        boton.innerText = "Copiar";
    }, 2000); //despues de 2seg cambia el nombre
}