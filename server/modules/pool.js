const pg = require ('pg');
const pool = new pg.Pool({
    database: 'weekend-to-do-app',
    host: 'localhost',
    post: 5432,
    max: 12,
    idleTimeoutMillis: 30000
});

module.exports = pool;