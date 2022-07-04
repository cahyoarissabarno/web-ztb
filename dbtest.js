const sqlite = require("sqlite")
const sqlite3 = require("sqlite3")

async function setup(){
    const db = await sqlite.open({
        filename: "./db.db",
        driver: sqlite3.Database
    })
    // await db.migrate({force: 'last'})
    const product  = await db.all("select * from product")
    console.log(product)
}
setup()