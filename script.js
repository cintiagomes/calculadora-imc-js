alert ("hello word")

function calcularImc(){
    const nome = document.getElementById("nome").value
    const altura = parseFloat(document.getElementById("altura").value)
    const peso = parseFloat(document.getElementById("peso").value)
    const resultado = document.getElementById("resultado")

    const imc = parseFloat(peso.value) / (parseFloat(altura.value) ** 2).toFixed(2);
    resultado.textContent = imc;
    
    if(imc.value < 18.5){
        resultado.textContent = `${nome} seu IMC é ${imc}.Portanto você está baixo do peso`;
    }else if(imc.value >= 18.5 && imc.value <= 24.9){
        resultado.textContent = `${nome} seu IMC é ${imc}.Portanto você está com o peso ideal`;
    }else if(imc.value >= 30.0 && imc.value <= 34.9){
        resultado.textContent = `${nome} seu IMC é ${imc}.Portanto você está com obesidade grau I`;
    }else if(imc.value >= 35.0 && imc.value <= 39.9){
        resultado.textContent = `${nome} seu IMC é ${imc}.Portanto você está com obesidade grau II`;
    }else{
        resultado.textContent = `${nome} seu IMC é ${imc}.Portanto você está com obesidade grau III`;
    }
}

document.getElementById("calcular")
calcular.addEventListener("click" ,calcularImc)