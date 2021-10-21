import express from "express";
import { farhenheitToCelsius } from "../formula/celsius.js"
import { celsiusToKelvin } from "../formula/celsius.js"
import { celsiusToFahrenheit } from "../formula/fahrenheit.js"
import { fahrenheitToKelvin } from "../formula/fahrenheit.js"

const router = express.Router();

router.post("/", (req, res)=> {
    let t = req.query.temp
    let oP = req.query.operation

    if(oP = "f2c"){
       t = farhenheitToCelsius(t)
      
       res.send(`${t}`);
    };
    if(oP = "c2k"){
        t = celsiusToKelvin(t)
   
        res.send(`${t}`);
     };
     if(oP = "c2f"){
        t = celsiusToFahrenheit(t)
  
        res.send(`${t}`);
     };
     if(oP = "f2k"){
        t = fahrenheitToKelvin(t)

        res.send(`${t}`);
     }
})


export { router as routesC}