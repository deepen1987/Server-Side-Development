import express from "express";
import { Recipe, validateRecipe } from "../models/recipe.js";

export const router = express.Router();

// Get all recipes
router.get("/", async (req, res) =>{
    const recipes = await Recipe.find().sort("name");
    res.send(recipes);
});

// Get one indicated step of your recipe by ID 
router.get("/:idR/step/:idS", async (req, res)=> {
    const recipe = await Recipe.findById(req.params.idR)
    const step = Number(req.params.idS) - 1
    res.send(recipe.steps[step])
});

// Post a Full recipe
router.post("/", async (req, res) =>{
    const { error } = validateRecipe(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const recipe = new Recipe({
        name: req.body.name,
        description: req.body.description,
        steps: req.body.steps
    });
    const result = await recipe.save();

    res.send(result)
});

// Post a step in recipe