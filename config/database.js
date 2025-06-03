import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();
const localhost = process.env.localhost;
const password = process.env.password;
const database = process.env.database;

let id = 0;

const db = await mysql.createConnection({
  host: localhost,
  user: "root",
  password: password,
  database:database
});

export const add_data = async (title, desc) => {
    await db.query(`USE todo;`);
    await db.query(`INSERT INTO note_making (id,title,description)
        VALUES (?,?,?);`, [id, title, desc]);
        id++;
        console.log("Data successfully added");
    }
    
export const get_data = async () => {
    const [rows] = await db.query(`SELECT * FROM note_making;`);
    console.log("Data successfully retrieved");
    return rows;
}