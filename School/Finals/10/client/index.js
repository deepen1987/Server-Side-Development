document.addEventListener("DOMContentLoaded", () => {

    const menu = document.getElementById("menu");
    const news = document.getElementById("news");
    const newsid = document.getElementById("newsid");
    const caption = document.getElementById("caption");
    const article = document.getElementById("article");
    const btn = document.getElementById("submit");
    const result = document.getElementById("result");

    news.classList.add("hide");


    menu.addEventListener("change", (event) => {
        resetInput();

        switch (event.target.value) {
            case "create":

                news.classList.add("hide");

                break;

            case "update":

                news.classList.remove("hide");

                break;

            default:
                break;
        }
    });

    btn.addEventListener("click", () => {
        switch (menu.value) {
            case "create":
                const data1 = {
                    captionData: caption.value,
                    articleData: article.value
                };
                const urlP = `http://localhost:3000/post`;
                fetch(urlP, {
                    method: "POST",
                    body: JSON.stringify(data1),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data)

                        result.innerHTML = `
                    <table><tr><th>ID</th><th>Caption</th><th>Article </th></tr>
                    <tr><td>${data._id}</td><td>${data.caption}</td><td>${data.article}</td></tr>
                    `
                    })
                    .catch((err) => console.log(err));

                resetInput();
                break;

            case "update":
                const data2 = {
                    captionData: caption.value,
                    articleData: article.value
                };
                const urlPu = `http://localhost:3000/put/${newsid.value}`;
                fetch(urlPu, {
                    method: "PUT",
                    body: JSON.stringify(data2),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data)

                        result.innerHTML = `
                    <table><tr><th>ID</th><th>Caption</th><th>Article </th></tr>
                    <tr><td>${data._id}</td><td>${data.caption}</td><td>${data.article}</td></tr>
                    `
                    })
                    .catch((err) => console.log(err));
                resetInput();
                break;

            default:
                break;
        }
    });

    function resetInput() {
        newsid.value = "";
        caption.value = "";
        article.value = "";
    };
});