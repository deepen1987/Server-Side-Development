import { output } from "./output.js";

export async function updateStep() {
    const idR = document.getElementById("recipe-id").value
    const ids = document.getElementById("step-id").value
    const step = document.getElementById("step").value;

    const url = `http://localhost:3000/recipes/${idR}/step/${ids}`;
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