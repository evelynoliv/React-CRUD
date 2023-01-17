import mysql from "mysql"

export const db = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "Gata@212815",
    database:"reactcrud"
})