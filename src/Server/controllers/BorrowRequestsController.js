const { json } = require('express');
const pool = require("../models/database");

class BorrowRequestsController {
    // [GET]
    async readByItem(req, res) {
        try {
            const {id} = req.params;
            const borrowReq = await pool.query(
                "SELECT request_id, item_id, borrower, to_char(start_date, 'dd/mm/yyyy') as start_date, to_char(end_date, 'dd/mm/yyyy') as end_date, reason FROM borrowrequest WHERE item_id=$1",
                [id]
            );
            res.json(borrowReq.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
    async readById(req, res) {
        try {
            const {id} = req.params;
            const borrowReq = await pool.query(
                "SELECT request_id, item_id, borrower, to_char(start_date, 'dd/mm/yyyy') as start_date, to_char(end_date, 'dd/mm/yyyy') as end_date, reason FROM borrowrequest WHERE request_id=$1",
                [id]
            );
            res.json(borrowReq.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [POST]
    async create(req, res) {
        try {
            const data = req.body;
            const borrowReq = await pool.query(
                "INSERT INTO borrowrequest(item_id, borrower, start_date, end_date, reason) VALUES($1, $2, $3::date, $4::date, $5) RETURNING *",
                [data.item_id, data.borrower, data.start_date, data.end_date, data.reason]
            );
            res.json(borrowReq.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [PUT]
    async deleteByItem(req, res) {
        try {
            const {id} = req.params;
            const borrowReq = await pool.query(
                "DELETE FROM borrowrequest WHERE item_id = $1 RETURNING *",
                [id]
            );
            res.json(borrowReq.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
    async deleteById(req, res) {
        try {
            const {id} = req.params;
            const borrowReq = await pool.query(
                "DELETE FROM borrowrequest WHERE request_id = $1 RETURNING *",
                [id]
            );
            res.json(borrowReq.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
}
module.exports = new BorrowRequestsController;