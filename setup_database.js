require('dotenv').config();
const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionLimit: 1
});

async function setupDatabase() {
    let conn;
    try {
        conn = await pool.getConnection();
        console.log("Connected to MariaDB server.");

        await conn.query("CREATE DATABASE IF NOT EXISTS resume_data;");
        console.log("Database 'resume_data' created or already exists.");

    } catch (err) {
        console.error("Error setting up database:", err);
    } finally {
        if (conn) conn.end();
        pool.end();
    }
}

setupDatabase();
