const { json } = require('express');
const pool = require("../models/database");

class AccountsController {
    // [GET]
    async read(req, res) {
        try {
            const {username} = req.params;
            const account = await pool.query(
                "SELECT password FROM account WHERE username=$1",
                [username]
            );
            res.json(account.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [GET]
    async info(req, res) {
        try {
            const {username} = req.params;
            const account = await pool.query(
                "SELECT name, to_char(dob, 'dd/mm/yyyy') as dob, gender, avatar FROM account WHERE username=$1",
                [username]
            );
            res.json(account.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [POST]
    async signup(req, res) {
        try {
            const {username} = req.params;
            const data = req.body;
            const account = await pool.query(
                "INSERT INTO account(username, password, email, phone) VALUES($1, $2, $3, $4) RETURNING *",
                [username, data.password, data.email, data.phone]
            );
            res.json(account.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [PUT]
    async update(req, res) {
        try {
            const {username} = req.params;
            const data = req.body;
            const account = await pool.query(
                "UPDATE account SET name = $2, dob = $3::date, gender = $4, avatar = $5 WHERE username = $1 RETURNING *",
                [username, data.name, data.dob, data.gender, data.avatar]
            );
            res.json(account.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [DELETE]
    async delete(req, res) {
        try {
            const {username} = req.params;
            const account = await pool.query(
                "DELETE FROM account WHERE username = $1",
                [username]
            );
            res.json(account.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
}
module.exports = new AccountsController;