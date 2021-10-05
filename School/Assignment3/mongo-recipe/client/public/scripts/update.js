import { output } from "./output.js";

export async function updateStep() {
    const idR = document.getElementById("recipe-id").value;
    const idS = document.getElementById("step-id").value;
    const step = document.getElementById("step").value;

    if (idR === ""){ 
        document.getElementById("result").innerHTML = "Invalid Recipe ID";
        return;
    };
    if (isNaN(idS) || idS.trim() === "" || idS < 0){ 
        document.getElementById("result").innerHTML = "Invalid Step ID";
        return;
    };

    const url = `http://localhost:3000/recipes/${idR}/step/${idS}`;
    const postData = {
        steps: step
    };

    await axios({
        method: 'put',
        url: url,
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(postData)
    }).then((response) => {
        output(response.data);
    }).catch((error) => { document.getElementById("result").innerHTML = error.response.data });
}