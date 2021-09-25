const express = require("express");
const { Customer } = require("../models/customer.js")
const mongoose = require("mongoose");

const router = express.Router();

// Post the customer
router.post("/", async (req, res) => {
    const customer = new Customer({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        isGold: req.body.isGold,
        phone: req.body.phone
    });
    
    try {
        const result = await customer.save()
        res.send(result)
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

// Get the customer
router.get("/", async (req, res) => {
    const customer = await Customer
        .find()
        .sort('firstname');

    res.send(customer);

});

// Get the customer by id
router.get("/:id", async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    if(!customer) res.status(404).send("Customer with given ID not found");

    res.send(customer)

});

// Update customer by id
router.put("/:id", async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    if(!customer) return res.status(404).send("Customer with given ID not found");

    if(req.body.firstname !== customer.firstname) customer.firstname = req.body.firstname;
    if(req.body.lastname !== customer.lastname) customer.lastname = req.body.lastname;
    if(req.body.isGold !== customer.isGold) customer.isGold = req.body.isGold;
    if(req.body.phone !== customer.phone) customer.phone = req.body.phone;

    const result = await customer.save();
    res.send(result)
});

// Delere customer by id
router.delete("/:id", async (req, res) => {
    const customer = await Customer.findByIdAndRemove(req.params.id);
    if(!customer) return res.status(404).send("Customer with given ID not found");

    res.send(customer);
});

module.exports = router;