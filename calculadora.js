class Calculadora {
    sumar (num1, num2){
        return num1 + num2
    }
    restar (num1, num2){
        return num1 - num2
    }
    dividir (num1, num2){
        return num1 / num2
    }
    multiplicar (num1, num2){
        return num1 * num2
    }
    // abrirParentesis : '(',
    // cerrarParentesis :')',
    // factorial : 'x!',

    potenciarAlCuadrado(num1){
       return (num1 ** 2)
    }
    raizCuadrada (num) {
        return Math.sqrt(num)
    }
    raiz (num, n) {
        Math.pow(num , 1/n)
    }
    seno (){
        Math.sin(Math.PI / 2)
    }
    coseno (radians, radius) {
        return Math.cos(radians) * radius;
    }
    tangente (degrees) {
        return Math.tan(degrees * Math.PI / 180);
    }
    potenciarAlCubo (base, exponente) {
        Math.pow(base, 3)
    }

    raizCubica (num) {
        Math.cbrt(num)
    }

    potenciar (base, exponente) {
        Math.pow(base, exponente)
    }

    // porcentaje : '%',
    // ln : 'ln',

    log (x, y) {
        return Math.log(y) / Math.log(x);
    }
    // e : 'e',

    pi (radio) {
        return 2 * Math.PI * radio;
    }
}

