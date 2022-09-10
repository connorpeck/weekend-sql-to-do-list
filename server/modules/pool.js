const pg = require ('pg');
const pool = new pg.Pool({
    database: 'd4e1120bv8ikno',
    host: 'ec2-44-205-64-253.compute-1.amazonaws.com',
    post: 5432,
    max: 12,
    idleTimeoutMillis: 30000
});

module.exports = pool;
