const { json } = require('express');
const pool = require("../models/database");

class AccountsController {
    // [POST]
    async signup(req, res) {
        try {
            const data = req.body;
            const account = await pool.query(
                "INSERT INTO account(username, password, email, phone) VALUES($1, $2, $3, $4) RETURNING *",
                [data.username, data.password, data.email, data.phone]
            );
            res.json(account.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [POST]
    async info(req, res) {
        try {
            const data = req.body;
            const account = await pool.query(
                "INSERT INTO account(name, dob, gender, avatar) VALUES($1, $2, $3) RETURNING *",
                [data.name, data.dob, data.gender, data.avatar]
            );
            res.json(account.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
    async update(req, res) {
        try {
            const data = req.body;
            const account = await pool.query(
                "UPDATE account SET name = $2, dob = $3, gender = $4, avatar = $5 WHERE username = $1",
                [data.username, data.name, data.dob, data.gender, data.avatar]
            );
            res.json(account.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
}
module.exports = new AccountsController;