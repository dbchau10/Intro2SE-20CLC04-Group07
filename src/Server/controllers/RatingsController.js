const { json } = require('express');
const pool = require("../models/database");

class RatingsController {
    // [GET]
    async readItemRating(req, res) {
        try {
            const {id} = req.params;
            const rating = await pool.query(
                "SELECT rating_id, item_id, borrower, point, comment, to_char(date, 'dd/mm/yyyy') as date FROM itemRating where item_id = $1",
                [id]
            );
            res.json(rating.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [GET]
    async readBorrowerRating(req, res) {
        try {
            const {id} = req.params;
            const rating = await pool.query(
                "SELECT rating_id, lender, borrower, point, comment, to_char(date, 'dd/mm/yyyy') as date FROM borrowerRating where item_id = $1",
                [id]
            );
            res.json(rating.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [POST]
    async createItemRating(req, res) {
        try {
            const data = req.body;
            const item = await pool.query(
                "INSERT INTO itemRating(item_id, borrower, point, comment, date) VALUES($1, $2, $3, $4, $5) RETURNING *",
                [data.item_id, data.borrower, data.point, data.comment, data.date]
            );
            res.json(item.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [POST]
    async createBorrowerRating(req, res) {
        try {
            const data = req.body;
            const item = await pool.query(
                "INSERT INTO borrowerRating(lender, borrower, point, comment, date) VALUES($1, $2, $3, $4, $5) RETURNING *",
                [data.lender, data.borrower, data.point, data.comment, data.date]
            );
            res.json(item.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
}
module.exports = new RatingsController;