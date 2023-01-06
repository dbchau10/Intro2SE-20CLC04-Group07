const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "Baochau14102002",
    host: "localhost",
    port: 5432,
    database: "cadgerdb"
});

module.exports = pool;