class Resultado {
    constructor(resultadoValorAnterior, resultadoValorActual) {
        this.resultadoValorActual = resultadoValorActual;
        this.resultadoValorAnterior = resultadoValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar : '+',
            dividir : '/',
            multiplicar : 'x',
            restar : '-',

            abrirParentesis : '(',
            cerrarParentesis :')',
            factorial : 'x!',
            potenciarAlCuadrado : 'x²',
            raizCuadrada : '√',
            raiz : 'n√',
            
            seno : 'sin',
            coseno : 'cos',
            tangente : 'tg',
            potenciarAlCubo : 'x³',
            raizCubica : '√3',
            potenciar : 'xn',

            porcentaje : '%',
            ln : 'ln',

            log : 'log',
            e : 'e',

            pi : 'π',
        }
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual = "";
        this.valorAnterior = "";
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();

    }
    agregarNumero(numero){
        if(numero==="." && this.valorActual.includes(".")) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
        this.resultadoValorActual.textContent = this.valorActual;
        this.resultadoValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }
    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN (valorActual) || isNaN(valorAnterior)) return 
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}
