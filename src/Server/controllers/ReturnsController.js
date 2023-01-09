const { json } = require('express');
const pool = require("../models/database");

class ReturnsController {
    // [GET]
    async readByItem(req, res) {
        try {
            const { id } = req.params;
            const r = await pool.query(
                "SELECT r.return_id, r.item_id, r.borrower, to_char(r.date, 'dd/mm/yyyy') as date, r.contact, r.comment, r.rating, a.avatar FROM return as r INNER JOIN account as a on r.borrower = a.username WHERE r.item_id = $1",
                [id]
            );
            res.json(r.rows);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [POST]
    async create(req, res) {
        try {
            const data = req.body;
            const r = await pool.query(
                "INSERT INTO return(item_id, borrower, date, contact, comment, rating) VALUES($1, $2, $3, $4) RETURNING *",
                [data.item_id, data.borrower, data.date, data.contact, data.comment, data.rating]
            );
            res.json(r.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [DELETE]
    async delete(req, res) {
        try {
            const { id } = req.params;
            const r = await pool.query(
                "DELETE FROM return WHERE return_id = $1",
                [id]
            );
            res.json(r.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
}
module.exports = new ReturnsController;