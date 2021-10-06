import { saveBook } from "./book.js";

window.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector("#saveBtn");
    if ( target ) {
        target.addEventListener("click", (event) => {
            saveBook();
        });
    } else {
        console.error(`Unable to bind to target! Debug Required.`);
    }
});