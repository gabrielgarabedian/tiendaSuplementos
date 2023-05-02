const btnCalcular = document.getElementById("calcular")
btnCalcular.addEventListener("click",()=>{
    const peso = document.getElementById("textPeso")
    const altura = document.getElementById("textAltura")
    imc= peso.value / (altura.value*altura.value)
        if (imc < 18.5) {
            imcValue.innerText =`Tu valor es ${imc.toFixed(2)} \n clasificación: BAJO peso`
        } else if (imc <= 24.9) {
            imcValue.innerText =`Tu valor es ${imc.toFixed(2)} \n clasificación: Peso ADECUADO`
        } else if (imc <= 29.9) {
            imcValue.innerText =`Tu valor es ${imc.toFixed(2)} \n clasificación: Sobrepeso`
        } else if (imc <= 34.9) {
            imcValue.innerText =`Tu valor es ${imc.toFixed(2)} \n clasificación: Obesidad I`
        } else if (imc <= 39.9) {
            imcValue.innerText =`Tu valor es ${imc.toFixed(2)} \n clasificación: Obesidad II`
        } else if(imc >= 40) {
            imcValue.innerText =`Tu valor es ${imc.toFixed(2)} \n clasificación: Obesidad III`
        }
})

const btnReset = document.getElementById("resetCalcular")
btnReset.addEventListener("click",()=>{
    imcValue.innerText =` `
})