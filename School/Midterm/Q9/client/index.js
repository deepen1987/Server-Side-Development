document.addEventListener("DOMContentLoaded", ()=>{
    const result = document.getElementById("result");
    const send = document.getElementById("send");
    const fetchR = document.getElementById("fetch");
    const update = document.getElementById("update")
    
    send.addEventListener("click", () => {
        const userS = document.getElementById("username").value;
        const emailS = document.getElementById("email").value;

        const urlP = `http://localhost:5000/api/user?username=${userS}&email=${emailS}`;
        fetch(urlP, {
            method: "POST"
        })
        .then((res) => res.json())
        .then( (data) => {
            const us = data.username
            const em = data.email;
            result.innerHTML = `Username: ${us} Email: ${em}`
        })
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
    });

    update.addEventListener("click", ()=> {
        const username = document.getElementById("username").value;
        const userID = document.getElementById("userid").value;
        const ulrG = `http://localhost:5000/api/update/${userID}?username=${username}`

        fetch(ulrG, {
            method: "PUT"
        })
        .then(res => res.json())
        .then(data => {
            const us = data.username
            const em = data.email;
            result.innerHTML = `Username: ${us} Email: ${em}`
        })
        .catch((err) => console.log(err));
    });

    



})