import { output } from "./output.js";

export async function deleteStep() {
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

    await axios({
        method: 'delete',
        url: url
    }).then((response) => {
        output(response.data);
    }).catch((error) => { document.getElementById("result").innerHTML = error.response.data });
}

export async function deleteRecipe() {
    const idR = document.getElementById("recipe-id").value;

    if (idR === ""){ 
        document.getElementById("result").innerHTML = "Invalid Recipe ID";
        return;
    };

    const url = `http://localhost:3000/recipes/${idR}`;

    await axios({
        method: 'delete',
        url: url
    }).then((response) => {
        output(response.data);
    }).catch((error) => { document.getElementById("result").innerHTML = error.response.data });
}