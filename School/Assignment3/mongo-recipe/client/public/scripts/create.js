import { output } from "./output.js";

export async function createRecipe() {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const step = document.getElementById("step").value;
    const subMenu = document.getElementById("sub-menu");

    const url = `http://localhost:3000/recipes`;
    const postData = {
        name: name,
        description: description,
        steps: [step]
    };

    await axios({
        method: 'post',
        url: url,
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(postData)
    }).then((response) => {
        output(response.data);
    }).catch((error) => { document.getElementById("result").innerHTML = error.response.data });
};

export async function createStep() {
    const idR = document.getElementById("recipe-id").value;
    const step = document.getElementById("step").value;
    if (idR === ""){ 
        document.getElementById("result").innerHTML = "Invalid Recipe ID";
        return;
    };

    const url = `http://localhost:3000/recipes/${idR}/step`;
    const postData = {
        steps: step
    };

    await axios({
        method: 'post',
        url: url,
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(postData)
    }).then((response) => {
        output(response.data);
    }).catch((error) => { document.getElementById("result").innerHTML = error.response.data });

};
