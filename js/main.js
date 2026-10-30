import { factorial } from "./formula.js";

alert("hola, probando JS!")

const nInput = document.getElementById("n");
const btnInput = document.getElementById("enviar");
const resultado = document.getElementById("resultado");

btnInput.addEventListener( "click", () => {

    if(nInput.value.trim() === "" ){
            resultado.textContent = "Ingresa un valor"
            return;
        }

    const n = Number(nInput.value);

    if (n < 0 || !Number.isInteger(n)){
        resultado.textContent = "Ingresa un número entero positivo"
        return;
    }

    const respuesta = factorial(n);
    resultado.textContent = respuesta; //muestra resultado en html
    console.log('resultado: ', respuesta);  
}
)// evento Botón