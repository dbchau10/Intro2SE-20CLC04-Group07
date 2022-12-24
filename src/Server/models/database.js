const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "Anhlaga123",
    host: "localhost",
    port: 5432,
    database: "cadgerdb"
});

module.exports = pool;