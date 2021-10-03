export function output(data) {
    let result = `<tr>
        <td>ID</td>
        <td>${data._id}</td>
    </tr>
    <tr>
        <td>Name</td>
        <td>${data.name}</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>${data.description}</td>
    </tr>`
    for (let i = 0; i < data.steps.length; i++) {
        result += `<tr><td>Step ${i + 1}</td><td>${data.steps[i]}</td></tr>`
        
    }

    document.getElementById("result").innerHTML = result;
}