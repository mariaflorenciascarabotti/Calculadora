const displayOperacion = document.getElementById("operacion");
const displayResultado = document.getElementById("resultado");
const botones = document.querySelectorAll(".btn");

let operacionCompleta = false;

//Al total de caractener le resto 1 para obtener el indice del último numero (indice se cuenta desde 0, y los caracteres desde 1)
const ultimoValor = () => displayOperacion.textContent.substring(displayOperacion.textContent.length-1)

const escribirOperacion = text =>{

    //Cuando presiono un boton, se borra "_" 
    if(displayOperacion.textContent=='_' && text != '.') displayOperacion.textContent = '';
    
    //Si ingresa un operador (not a number) sigue el cálculo
    if(operacionCompleta && isNaN(text)){
        displayOperacion.textContent = displayResultado.textContent;
        operacionCompleta = false;
    }

    //Si ingresa un número luego de haber clickeado el "=", termina el cálculo y el display vuelve a 0 (porque al apretar "=" se ejecuta la función escribirResultado() y "operacionCompleta" pasa a ser True)
    if(operacionCompleta && !isNaN(text)){
        displayOperacion.textContent = '';
        displayResultado.textContent = '0';
        operacionCompleta = false;
    }

    //Si pongo dos operadores seguidos, el 1ro es reemplazado por el segundo
    if(isNaN(ultimoValor()) && isNaN(text)){
       displayOperacion.textContent = displayOperacion.textContent.substring(0,displayOperacion.textContent.length-1);
       displayOperacion.textContent +=text;

    //Limito el largo de caracteres a 25
    }else if(displayOperacion.textContent.length<25){
        displayOperacion.textContent += text;
    }
}

const escribirResultado = () =>{
    displayResultado.textContent = eval(displayOperacion.textContent)
    operacionCompleta = true;
}

const borrarTodo = () =>{
    displayOperacion.textContent = '_';
    displayResultado.textContent = '0';
}

botones.forEach (boton => {
    boton.addEventListener ('click', e => {
        if(e.target.textContent !== ''){
            switch (e.target.textContent) {
                case '=': 
                    escribirResultado();
                    break;
                case 'AC': 
                    borrarTodo();
                    break;
                case ',': 
                    escribirOperacion('.');
                    break;
            
                default: 
                    escribirOperacion(e.target.textContent);
                    break;
            }
        }
    });
});
    