require('dotenv').config();

async function main() {
    // get the client
    const mysql = require('mysql2/promise');
    
    // create the connection
    const connection = await mysql.createConnection(
        {host:process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME});

    // query database
    const [rows, fields] = await connection.execute(
        'SELECT id, password FROM people where password IS NOT NULL');
    console.log(rows);
  }
  main();