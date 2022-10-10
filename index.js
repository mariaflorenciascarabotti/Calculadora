const resultadoValorAnterior = document.getElementById("valor-anterior");
const resultadoValorActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll(".num");
const botonesOperadores = document.querySelectorAll(".operador");


const resultado = new Resultado(resultadoValorAnterior, resultadoValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener("click", () => resultado.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
   boton.addEventListener("click", () => resultado.computar(boton.value));
});