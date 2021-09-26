const { Customer } = require("../models/customer.js");
const { Movie } = require("../models/movie.js");
const { Rental, validateRental } = require("../models/rental.js");
const Fawn = require("fawn");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

Fawn.init("mongodb://localhost/vidly");

// post rental
router.post("/", async (req, res) =>{
    const { error } = validateRental(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const customer = await Customer.findById(req.body.customerid).catch( (error) =>  null);
    if(!customer) return res.status(400).send("Invalid Customer ID");

    const movie = await Movie.findById(req.body.movieid).catch( (error) =>  null);
    if(!movie) return res.status(400).send("Invalid Movie ID");

    if(movie.numberInStock === 0) return res.status(400).send("Movie not in stock");

    const rental = new Rental({
        customer: {
            _id: customer._id,
            name: `${ customer.firstname } ${ customer.lastname }`,
            phone: customer.phone
        },
        movie: {
            _id: movie._id,
            title: movie.title,
            dailyRentalRate: movie.dailyRentalRate
        },
        returnDate: req.body.returnDate,
        quantity: req.body.quantity
    });

    try{
        new Fawn.Task()
            .save("rentals", rental)
            .update('movies', { _id:movie._id }, { 
                $inc: { numberInStock: -rental.quantity}
            })
            .run();

        res.send(rental)
    }catch(ex) {
        res.status(500).send("Internal server error")
    }

        
});

// get all rentals
router.get("/", async (req, res) =>{
    const rental = await Rental.find().sort("_id");
    res.send(rental);
})

// get rental by id
router.get("/:id", async (req, res) =>{
    const rental = await Rental.findById(req.params.id).catch( (error) =>  null);
    if(!rental) return res.status(400).send("Invalid rental id");

    res.send(rental);
})

// Put rental by id
router.put("/:id", async (req, res) =>{
    const rental = await Rental.findByIdAndUpdate(req.params.id, {
        returnDate: req.body.returnDate
    });
    if(!rental) return res.status(400).send("Invalid Rental ID");

    const movie = await Movie.findById(rental.movie._id);
    movie.numberInStock = movie.numberInStock + rental.quantity;
    movie.save();

    res.send(rental);
})

module.exports = router;