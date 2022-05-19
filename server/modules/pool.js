const pg = require ('pg');
const pool = new pg.Pool({
    database: 'tasks_inventory',
    host: 'localhost',
    post: 5432,
    max: 12,
    idleTimeoutMillis: 30000
});

module.exports = pool;