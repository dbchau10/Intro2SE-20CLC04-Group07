const { json } = require('express');
const pool = require("../models/database");

class ItemsController {
    // [GET]
    async search(req, res) {
        try {
            let { kw } = req.params;
            kw = '%' + kw + '%';
            const item = await pool.query(
                "SELECT * FROM item WHERE name LIKE $1",
                [kw]
            );
            res.json(item.rows);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [GET]
    async getById(req, res) {
        try {
            const {id} = req.params;
            const item = await pool.query(
                "SELECT * FROM item WHERE item_id = $1",
                [id]
            );
            res.json(item.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [POST]
    async create(req, res) {
        try {
            const data = req.body;
            const item = await pool.query(
                "INSERT INTO item(name, lender, img, description, rating, status, borrow_times) VALUES($1, $2, $3, $4, 0, 0, 0) RETURNING *",
                [data.name, data.lender, data.img, data.description]
            );
            res.json(item.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [PUT]
    async updateStatus(req, res) {
        try {
            const {id} = req.params;
            const data = req.body;
            let item;
            if (data.status == 1) {
                item = await pool.query(
                    "UPDATE item SET status = $2, borrow_times = $3 WHERE item_id = $1 RETURNING *",
                    [id, data.status, data.borrow_times+1]
                );
            } else {
                item = await pool.query(
                    "UPDATE item SET status = $2 WHERE item_id = $1 RETURNING *",
                    [id, data.status]
                );
            }
            res.json(item.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [PUT]
    async updateRating(req, res) {
        try {
            const {id} = req.params;
            const data = req.body;
            const item = await pool.query(
                "UPDATE item SET rating = $2 WHERE item_id = $1 RETURNING *",
                [id, data.rating]
            );
            res.json(item.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [DELETE]
    async delete(req, res) {
        try {
            const {id} = req.params;
            const item = await pool.query(
                "DELETE FROM item WHERE item_id = $1 RETURNING *",
                [id]
            );
            res.json(item.rows[0]);
        }
        catch (err){
            console.error(err.message);
        }
    }
}
module.exports = new ItemsController;