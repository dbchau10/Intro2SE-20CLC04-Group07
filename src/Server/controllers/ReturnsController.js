const { json } = require('express');
const pool = require("../models/database");

class ReturnsController {
    // [GET]
    async readByItem(req, res) {
        try {
            const { id } = req.params;
            const r = await pool.query(
                "SELECT return_id, item_id, borrower, to_char(date, 'dd/mm/yyyy') as date, contact FROM return WHERE item_id = $1",
                [id]
            );
            res.json(r.rows[0]);
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
                "INSERT INTO return(item_id, borrower, date, contact) VALUES($1, $2, $3, $4) RETURNING *",
                [data.item_id, data.borrower, data.date, data.contact]
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