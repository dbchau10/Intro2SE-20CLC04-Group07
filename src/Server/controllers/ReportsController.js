const { json } = require('express');
const pool = require("../models/database");

class ReportsController {
    // [GET]
    async read(req, res) {
        try {
            const report = await pool.query(
                "SELECT r.report_id, r.reason, r.sender, r.reported, a.avatar FROM report as r INNER JOIN account as a on r.reported = a.username"
            );
            res.json(report.rows);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [GET]
    async readById(req, res) {
        try {
            const {id} = req.params;
            const report = await pool.query(
                "SELECT * FROM report WHERE report_id = $1",
                [id]
            );
            res.json(report.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [POST]
    async create(req, res) {
        try {
            const data = req.body;
            const report = await pool.query(
                "INSERT INTO report(reason, sender, reported) VALUES($1, $2, $3) RETURNING *",
                [data.reason, data.sender, data.reported]
            );
            res.json(report.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [DELETE]
    async delete(req, res) {
        try {
            const { id } = req.params;
            const report = await pool.query(
                "DELETE FROM report WHERE report_id = $1 RETURNING *",
                [id]
            );
            res.json(report.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
}
module.exports = new ReportsController;