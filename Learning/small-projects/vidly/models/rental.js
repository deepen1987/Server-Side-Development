const Joi = require("joi");
const joiObjectid = require("joi-objectid");
const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({
    customer: {
        type: new mongoose.Schema({
            name: {
                type: String,
                required: true,
                min: 5,
                max: 50
            },
            phone: {
                type: String,
                required: true,
                max: 10
            }
        })
    },
    movie: {
        type: new mongoose.Schema({
            title: {
                type: String,
                required: true,
                min: 5,
                max: 255
            },
            dailyRentalRate: {
                type: Number,
                required: true,
                min: 0,
                max: 255
            }
        })
    },
    rentalDate: {
        type: Date,
        default: Date.now(),
        required: true
    },
    returnDate: {
        type: Date
    },
    quantity: {
        type: Number,
        min: 1,
        max: 3,
        required: true
    }
});

const Rental = mongoose.model("Rental", rentalSchema);

function validateRental(rental){
    const todayDate = Date.now();
    const schema = Joi.object({
        customerid: Joi.objectId().required(),
        movieid: Joi.objectId().required(),
        quantity: Joi.number().min(1).max(3).required()
    });

    return schema.validate(rental);
};


exports.Rental = Rental;
exports.validateRental = validateRental;