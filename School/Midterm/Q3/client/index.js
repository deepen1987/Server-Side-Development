

document.addEventListener("DOMContentLoaded", () => {
    let inputNumber = document.getElementById("number");
    let converter = document.getElementById("datalist");
    let btn = document.getElementById("btn");
    let result = document.getElementById("result");

    btn.addEventListener("click", () => {
        resetInput();
        let url = "";
        let outputNumber = Number(document.getElementById("number").value)
        if(converter.value !== ""){
            switch(converter.value){
                case "Fahrenheit to Celsius":
                    url = `http://localhost:5000/?temp=${outputNumber}&operation=f2c`;
                    fetching(url);
                break;
                case "Celsius to Kelvin":
                    url = `http://localhost:5000/?temp=${outputNumber}&operation=c2k`;
                    fetching(url);
                    break;
                case "Celsius to Fahrenheit":
                    url = `http://localhost:5000/?temp=${outputNumber}&operation=c2f`;
                    fetching(url);
                    break;
                case "Fahrenheit to Kelvin":
                    url = `http://localhost:5000/?temp=${outputNumber}&operation=f2k`;
                    fetching(url);
                    break;
            }
        }
    });

function verify(inputField){
    return isNaN(inputField) || inputField.trim() === ""
};

function fetching(urls){
    fetch(urls, {
        method: "POST"
    })
    .then((res) => res.text())
    .then( (data) => result.innerHTML = data)
    .catch((err) => console.log(err));
}

function resetInput(){
    if(verify(inputNumber.value)){
        inputNumber.value = 0
    }
}
});