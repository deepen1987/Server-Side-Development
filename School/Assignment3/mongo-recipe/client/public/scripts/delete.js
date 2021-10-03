import { output } from "./output.js";

export async function deleteStep() {
    const idR = document.getElementById("recipe-id").value
    const ids = document.getElementById("step-id").value

    const url = `http://localhost:3000/recipes/${idR}/step/${ids}`;

    await axios({
        method: 'delete',
        url: url
    }).then((response) => {
        output(response.data);
    }).catch((error) => { document.getElementById("result").innerHTML = error.response.data });
}

export async function deleteRecipe() {
    const idR = document.getElementById("recipe-id").value

    const url = `http://localhost:3000/recipes/${idR}`;

    await axios({
        method: 'delete',
        url: url
    }).then((response) => {
        output(response.data);
    }).catch((error) => { document.getElementById("result").innerHTML = error.response.data });
}