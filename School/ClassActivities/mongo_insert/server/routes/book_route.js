import express from "express";
import { isProduction } from "../utils/common.js";
import { Book } from "../models/Book.js";

const router = express.Router();

const SERVER_ERROR_BOOK_CREATE = "B-100";
const SERVER_ERROR_BOOK_UPDATE = "B-101"; // not completed/used..

router.post("/", async (req, resp) => { 
    const data = {
        course_name:  req.body.course_name,
        section_code: req.body.section_code,
        professor:    req.body.professor,
        building:     req.body.building,
        room:         req.body.room,
        start_time:   req.body.start_time,
        end_time:     req.body.end_time
    };
    
    const book = new Book(data);
    try {
        const savedBook = await book.save();
        resp.status(200).json(JSON.stringify(savedBook)); 
    } catch(err) {
        if (isProduction()) {
            console.error(err);
        }
        resp.status(500).json({error: SERVER_ERROR_BOOK_CREATE}); 
    }
});

export {router as bookRoutes};