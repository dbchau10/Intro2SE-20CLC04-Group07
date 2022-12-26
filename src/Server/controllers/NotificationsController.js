const { json } = require('express');
const pool = require("../models/database");

class NotificationsController {
    // [GET]
    async read(req, res) {
        try {
            const {username} = req.params;
            const noti = await pool.query(
                "SELECT * FROM notification WHERE username = $1",
                [username]
            );
            res.json(noti.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [POST]
    async create(req, res) {
        try {
            const data = req.body;
            const noti = await pool.query(
                "INSERT INTO notification(content, username) VALUES($1, $2) RETURNING *",
                [data.content, data.username]
            );
            res.json(noti.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
}
module.exports = new NotificationsController;