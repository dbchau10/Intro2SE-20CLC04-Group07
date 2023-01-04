const { json } = require('express');
const pool = require("../models/database");

class LogsController {
    // [GET]
    async read(req, res) {
        try {
            const {username} = req.params;
            const log = await pool.query(
                "SELECT l.log_id, l.item_id, l.borrower, to_char(date, 'dd/mm/yyyy') as date, i.lender, i.img, i.name FROM log AS l INNER JOIN item as i on i.item_id = l.item_id where i.lender = $1 or l.borrower = $1",
                [username]
            );
            res.json(log.rows);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [GET]
    async getByBorrower(req, res) {
        try {
            const {username} = req.params;
            const log = await pool.query(
                "SELECT l.log_id, l.item_id, l.borrower, to_char(date, 'dd/mm/yyyy') as date, i.lender, i.img, i.name FROM log AS l INNER JOIN item as i on i.item_id = l.item_id where l.borrower = $1",
                [username]
            );
            res.json(log.rows);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [GET]
    async getByLender(req, res) {
        try {
            const {username} = req.params;
            const log = await pool.query(
                "SELECT l.log_id, l.item_id, l.borrower, to_char(date, 'dd/mm/yyyy') as date, i.lender, i.img, i.name FROM log AS l INNER JOIN item as i on i.item_id = l.item_id where i.lender = $1",
                [username]
            );
            res.json(log.rows);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [POST]
    async create(req, res) {
        try {
            const data = req.body;
            const log = await pool.query(
                "INSERT INTO log(item_id, borrower, date) VALUES($1, $2, $3) RETURNING *",
                [data.item_id, data.borrower, data.date]
            );
            res.json(log.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
}
module.exports = new LogsController;