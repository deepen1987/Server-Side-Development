import { output } from "./output.js";

export async function getRecipe() {
    const idR = document.getElementById("recipe-id").value;

    if (idR === ""){ 
        document.getElementById("result").innerHTML = "Invalid Recipe ID";
        return;
    }; 

    const url = `http://localhost:3000/recipes/${idR}`;

    await axios({
        method: 'get',
        url: url
    }).then((response) => {
        output(response.data);
    }).catch((error) => { document.getElementById("result").innerHTML = error.response.data });
}

export async function getRecipeStep() {
    const idR = document.getElementById("recipe-id").value;
    const idS = document.getElementById("step-id").value;

    if (idR === ""){ 
        document.getElementById("result").innerHTML = "Invalid Recipe ID";
        return;
    };
    if (isNaN(idS) || idS.trim() === "" || idS < 0){ 
        document.getElementById("result").innerHTML = "Invalid Step ID";
        return;
    };

    const url = `http://localhost:3000/recipes/${idR}/step/${idS}`;

    await fetch(url, {
        method: "get"
    })
        .then(response => {
            if (!response.ok) {
                response.text().then((data) => {
                    document.getElementById("result").innerHTML = data
                })
            } else {
                response.json().then((data) => document.getElementById("result").innerHTML = data.step)
            }
        })
        .catch(error => {
            console.log(error)
        })
};

