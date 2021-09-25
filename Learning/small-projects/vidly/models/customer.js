const Joi = require("joi");
const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    lastname: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    isGold: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        validate: {
            validator: function(value){
                return !isNaN(value) && value.length == 10
            },
            message: "Phone number should be all numbers and 10 digit in length."
        }
    }
});

const Customer = mongoose.model("Customer", customerSchema);

exports.Customer = Customer;
