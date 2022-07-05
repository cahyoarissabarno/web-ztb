const connect = require("../../../../../sqliteConnection")

export default async function handler(req, res) {
    if(req.method == "POST"){
        if(!req.body.name || !req.body.category || !req.body.price || !req.body.status){
            res.status(400).send({message : "insufficient body"})
            return
        }
        const db = await connect()
        const result = await db.run("insert into product (name, category, price, status) values (?,?,?,?)", req.body.name, req.body.category, req.body.price, req.body.status)  
        console.log(result)
        if(result.changes == 1){
            res.status(200).send({message : "success"})
        }else{
            res.status(200).send({message : "failed"})
        }
    }
}