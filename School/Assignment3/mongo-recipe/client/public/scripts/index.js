import * as create from "./create.js";
import * as update from "./update.js";
import * as del from "./delete.js";
import * as get from "./get.js";

document.addEventListener("DOMContentLoaded", () => {
    const name = document.getElementById("name");
    const description = document.getElementById("description");
    const step = document.getElementById("step");
    const idR = document.getElementById("recipe-id");
    const ids = document.getElementById("step-id");
    const menu = document.getElementById("menu");
    const nameDiv = document.getElementById("name-div");
    const descDiv = document.getElementById("desc-div");
    const stepDiv = document.getElementById("step-div");
    const idRDiv = document.getElementById("idR-div");
    const idSDiv = document.getElementById("idS-div");
    nameDiv.classList.remove("hide");
    descDiv.classList.remove("hide");
    stepDiv.classList.remove("hide");
    idRDiv.classList.add("hide");
    idSDiv.classList.add("hide");

    menu.addEventListener("change", (event) => {
        resetInput();

        switch (event.target.value) {
            case "create-recipe":
                nameDiv.classList.remove("hide");
                descDiv.classList.remove("hide");
                stepDiv.classList.remove("hide");
                idRDiv.classList.add("hide");
                idSDiv.classList.add("hide");
                break;

            case "create-step":
                nameDiv.classList.add("hide");
                descDiv.classList.add("hide");
                stepDiv.classList.remove("hide");
                idRDiv.classList.remove("hide");
                idSDiv.classList.add("hide");
                break;

            case "update-step":
                nameDiv.classList.add("hide");
                descDiv.classList.add("hide");
                stepDiv.classList.remove("hide");
                idRDiv.classList.remove("hide");
                idSDiv.classList.remove("hide");
                break;

            case "get-recipe":
                nameDiv.classList.add("hide");
                descDiv.classList.add("hide");
                stepDiv.classList.add("hide");
                idRDiv.classList.remove("hide");
                idSDiv.classList.add("hide");
                break;

            case "get-recipe-step":
                nameDiv.classList.add("hide");
                descDiv.classList.add("hide");
                stepDiv.classList.add("hide");
                idRDiv.classList.remove("hide");
                idSDiv.classList.remove("hide");
                break;

            case "delete-recipe":
                nameDiv.classList.add("hide");
                descDiv.classList.add("hide");
                stepDiv.classList.add("hide");
                idRDiv.classList.remove("hide");
                idSDiv.classList.add("hide");
                break;

            case "delete-recipe-step":
                nameDiv.classList.add("hide");
                descDiv.classList.add("hide");
                stepDiv.classList.add("hide");
                idRDiv.classList.remove("hide");
                idSDiv.classList.remove("hide");
                break;

            default:
                break;
        }
    });

    document.getElementById("btn").addEventListener("click", () => {
        switch (menu.value) {
            case "create-recipe":
                create.createRecipe()
                break;

            case "create-step":
                create.createStep()
                break;

            case "update-step":
                update.updateStep()
                break;

            case "get-recipe":
                get.getRecipe()
                break;

            case "get-recipe-step":
                get.getRecipeStep()
                break;

            case "delete-recipe":
                del.deleteRecipe()
                break;

            case "delete-recipe-step":
                del.deleteStep()
                break;

            default:
                break;
        }
    });

    function resetInput() {
        name.value = "";
        description.value = "";
        step.value = "";
        idR.value = "";
        ids.value = "";
    };
});