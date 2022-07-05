const sqlite = require("sqlite")
const sqlite3 = require("sqlite3")


module.exports = async function connect(){
    const db = await sqlite.open({
        filename: "./db.db",
        driver: sqlite3.Database
    })
    return db
}