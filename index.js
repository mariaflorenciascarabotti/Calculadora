const displayOperacion = document.getElementById("operacion");
const displayResultado = document.getElementById("resultado");
const botones = document.querySelectorAll(".btn");

let operacionCompleta = false;

const ultimoValor = () => displayOperacion.textContent.substring(displayOperacion.textContent.length-1)

const escribirOperacion = text =>{
    if(displayOperacion.textContent=='_' && text != '.') displayOperacion.textContent = '';

    if(operacionCompleta && isNaN(text)){
        displayOperacion.textContent = displayResultado.textContent;
        operacionCompleta = false;
    }

    if(operacionCompleta && !isNaN(text)){
        displayOperacion.textContent = '';
        displayResultado.textContent = '0';
        operacionCompleta = false;
    }

    if(isNaN(ultimoValor()) && isNaN(text)){
       displayOperacion.textContent = displayOperacion.textContent.substring(0,displayOperacion.textContent.length-1)
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
    