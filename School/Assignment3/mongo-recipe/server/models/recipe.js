import mongoose from "mongoose";
import Joi from "joi";

export const Recipe = mongoose.model("Recipe", new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 5,
        max: 40
    },
    description: {
        type: String,
        max: 255,
        required: true
    },
    steps: {
        type: [ String ],
        max: 255,
        required: true
    }
}));

export function validateRecipe(recipe){
    const schema = Joi.object({
        name: Joi.string().min(5).max(40).required(),
        description: Joi.string().max(255).required(),
        steps: Joi.array().items(Joi.string().max(255).required())
    });
    return schema.validate(recipe);
};

export function validateStep(step){
    const schema = Joi.object({
        steps: Joi.string().max(255).required()
    });
    return schema.validate(step);
};

export function validateObjectID(objID){
    return mongoose.isValidObjectId(objID);
}