alert ("hello word")

const altura = document.getElementById("altura")
const peso = document.getElementById("peso")
const nome = document.getElementById("nome")
const resultado = document.getElementById("resultado")
const calcular = document.getElementById("calcular")

function calcularImc{
    const imc = parseFloat(peso.value) / (parseFloat(altura.value) ** 2)
    resultado.textContent = imc
}

calcular.addEventListener("click" ,calcularImc)