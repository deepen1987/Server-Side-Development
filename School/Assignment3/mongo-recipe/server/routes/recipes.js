import express from "express";
import { Recipe, validateRecipe, validateStep, validateObjectID } from "../models/recipe.js";

export const router = express.Router();

// Get recipes
router.get("/:id", async (req, res) =>{
    const objID = validateObjectID(req.params.id);
    if(!objID) return res.status(400).send("Invalid ID");

    const recipe = await Recipe.findById(req.params.id);
    if(!recipe) return res.status(400).send("Recipe not found.");
    
    res.send(recipe);
});

// Get one indicated step of your recipe by ID 
router.get("/:idR/step/:idS", async (req, res)=> {
    const objID = validateObjectID(req.params.idR);
    if(!objID) return res.status(400).send("Invalid ID");

    const recipe = await Recipe.findById(req.params.idR)
    if(!recipe) return res.status(400).send("Recipe not found.");

    const step = Number(req.params.idS)
    if((step - 1) < 0 || step > recipe.steps.length) return res.status(400).send("Invalid Step parameter.");

    const result = { step: recipe.steps[step - 1]}
    res.status(200).send(result)
});

// Post Create a recipe
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

// Post Create a new step in recipe
router.post("/:id/step", async (req, res) =>{
    const objID = validateObjectID(req.params.id);
    if(!objID) return res.status(400).send("Invalid ID");

    const { error } = validateStep(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let recipe = await Recipe.findById(req.params.id);
    if(!recipe) return res.status(400).send("Recipe not found.");

    recipe.steps.push(req.body.steps);
    recipe = await recipe.save();

    res.send(recipe); 
});

// Put Update a step of the recipe
router.put("/:idR/step/:idS", async (req, res) =>{
    const objID = validateObjectID(req.params.idR);
    if(!objID) return res.status(400).send("Invalid ID");

    const { error } = validateStep(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let recipe = await Recipe.findById(req.params.idR)
    if(!recipe) return res.status(400).send("Recipe not found.");

    const step = Number(req.params.idS)
    if((step - 1) < 0 || step > recipe.steps.length) return res.status(400).send("Invalid Step parameter.");

    recipe.steps[step - 1] = req.body.steps
    recipe = await recipe.save();

    res.send(recipe); 
});

// Delete a Step in Recipe
router.delete("/:idR/step/:idS", async (req, res) =>{
    const objID = validateObjectID(req.params.idR);
    if(!objID) return res.status(400).send("Invalid ID");

    let recipe = await Recipe.findById(req.params.idR);
    if(!recipe) return res.status(400).send("Recipe not found.");

    const step = Number(req.params.idS)
    if((step - 1) < 0 || step > recipe.steps.length) return res.status(400).send("Invalid Step parameter.");

    recipe.steps.splice(step - 1, 1)
    recipe = await recipe.save()

    res.send(recipe);
});


// Delete a Recipe
router.delete("/:id", async (req, res) =>{
    const objID = validateObjectID(req.params.id);
    if(!objID) return res.status(400).send("Invalid ID");

    const recipe = await Recipe.findByIdAndRemove(req.params.id);
    if(!recipe) return res.status(400).send("Recipe not found.");

    res.send(recipe);
})