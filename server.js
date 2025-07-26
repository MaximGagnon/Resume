require('dotenv').config();
const express = require('express');
const mariadb = require('mariadb');
const path = require('path');

const app = express();
const port = 3000;

// Database connection pool
const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'resume_data', // We'll create this database later
    connectionLimit: 5
});

// Serve static files from the root directory (for index.html and style.css)
app.use(express.static(path.join(__dirname, '/')));

// A simple API endpoint to check DB connection
app.get('/api/status', async (req, res) => {
    let conn;
    try {
        conn = await pool.getConnection();
        console.log("Database connected successfully!");
        res.json({ status: 'success', message: 'Database connected' });
    } catch (err) {
        console.error("Database connection failed:", err);
        res.status(500).json({ status: 'error', message: 'Database connection failed' });
    } finally {
        if (conn) conn.release(); //release to pool
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
