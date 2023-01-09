const { json } = require('express');
const pool = require("../models/database");

class ItemsController {
    // [GET] example url: ...?keyword=...&unavailable=...&ratingFilter=...
    async search(req, res) {
        try {
            let data = req.query;
            data.keyword = '%' + data.keyword + '%';
            data.ratingFilter = parseInt(data.ratingFilter);
            let item;
            let q ="SELECT * FROM item WHERE name LIKE $1 AND rating >= $2";
            if (data.unavailable == "0") q += " AND status = 0";
            item = await pool.query(
                q,
                [data.keyword, data.ratingFilter]
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

    // [GET]
    async getTopProduct(req, res) {
        try {
            const item = await pool.query(
                "SELECT * FROM item ORDER BY borrow_times desc limit 5"
            );
            res.json(item.rows);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [GET]
    async getOtherProduct(req, res) {
        try {
            const {id} = req.params;
            const item = await pool.query(
                "SELECT * FROM item WHERE item_id != $1 ORDER BY borrow_times desc limit 5",
                [id]
            );
            res.json(item.rows);
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [GET]
    async getByLender(req, res) {
        try {
            const {username} = req.params;
            const item = await pool.query(
                "SELECT * FROM item WHERE lender = $1",
                [username]
            );
            res.json(item.rows);
        }
        catch (err){
            console.error(err.message);
        }
    }

    // [GET]
    async getByRequest(req, res) {
        try {
            let {username, status} = req.params;
            status = parseInt(status);
            const item = await pool.query(
                "SELECT * FROM item WHERE lender = $1 AND status = $2",
                [username, status]
            );
            res.json(item.rows);
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
                "INSERT INTO item(name, lender, img, description, rating, status, borrow_times) VALUES($1, $2, $3, $4, 0, 1, 0) RETURNING *",
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
            let {id, status, borrow_times} = req.params;
            status = parseInt(status);
            borrow_times = parseInt(borrow_times);
            let item;
            if (status == 1) {
                item = await pool.query(
                    "UPDATE item SET status = $2, borrow_times = $3 WHERE item_id = $1 RETURNING *",
                    [id, 0, borrow_times+1]
                );
            } else {
                item = await pool.query(
                    "UPDATE item SET status = $2 WHERE item_id = $1 RETURNING *",
                    [id, 1]
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
            const {id, rating} = req.params;
            rating = parseFloat(rating);
            const item = await pool.query(
                "UPDATE item SET rating = $2 WHERE item_id = $1 RETURNING *",
                [id, rating]
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