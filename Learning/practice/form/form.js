document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const submit = document.getElementById("submit");

    submit.addEventListener("click", (event) => {
        event.preventDefault()
        const formData = new FormData(form);
        const data = new URLSearchParams(formData);
        for (const iterator of formData.values()) {
            console.log(iterator);
        }
        

    });


});