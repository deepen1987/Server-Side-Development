document.addEventListener("DOMContentLoaded", ()=>{
    const result = document.getElementById("result");
    const send = document.getElementById("send");
    const fetchR = document.getElementById("fetch");
    
    send.addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;

        const urlP = `http://localhost:5000/api/user?username=${username}&email=${email}`;
        fetch(urlP, {
            method: "POST"
        })
        .then((res) => res.text())
        .then( (data) => result.innerHTML = data)
        .catch((err) => console.log(err));
    });

    fetchR.addEventListener("click", ()=> {
        const userID = document.getElementById("userid").value;
        const ulrG = `http://localhost:5000/api/${userID}`

        fetch(ulrG, {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => {
            const us = data.username
            const em = data.email;
            result.innerHTML = `Username: ${us} Email: ${em}`
        })
        .catch((err) => console.log(err));
    })

    



})