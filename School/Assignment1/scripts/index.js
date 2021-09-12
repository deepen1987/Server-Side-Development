import { celsiusToFahrenheit, fahrenheitToKelvin } from "./fahrenheit.js";
import { farhenheitToCelsius, celsiusToKelvin } from "./celsius.js"

document.addEventListener("DOMContentLoaded", () => {
    let inputNumber = document.getElementById("number");
    let converter = document.getElementById("datalist");
    let btn = document.getElementById("btn");
    let result = document.getElementById("result");

    btn.addEventListener("click", () => {
        resetInput();
        let outputNumber = Number(document.getElementById("number").value)
        if(converter.value !== ""){
            switch(converter.value){
                case "Fahrenheit to Celsius":
                    result.innerHTML = farhenheitToCelsius(outputNumber).toFixed(2)
                break;
                case "Celsius to Kelvin":
                    result.innerHTML = celsiusToKelvin(outputNumber).toFixed(2)
                    break;
                case "Celsius to Fahrenheit":
                    result.innerHTML = celsiusToFahrenheit(outputNumber).toFixed(2)
                    break;
                case "Fahrenheit to Kelvin":
                    result.innerHTML = fahrenheitToKelvin(outputNumber).toFixed(2)
                    break;
            }
        }
    });

function verify(inputField){
    return isNaN(inputField) || inputField.trim() === ""
};

function resetInput(){
    if(verify(inputNumber.value)){
        inputNumber.value = 0
    }
}
});