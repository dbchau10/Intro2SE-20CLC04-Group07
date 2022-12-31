const { json } = require('express');
const pool = require("../models/database");
const send_email=require("../ultils/send_email")
class EmailController {
    // [GET]
    async send_email(req, res) {
        try {
            //res.send("hit");
            const {to_email,content} = req.params;
            await send_email(to_email,content).catch(console.error)
            res.send(content);
        }
        catch (err){
            console.error(err.message);
        }
    
    }
   
}
module.exports = new EmailController;