require('dotenv').config();

const port = process.env.PORT || 3005;
const db = process.env.DB_HOST || 'localhost';

module.exports = { port, db };