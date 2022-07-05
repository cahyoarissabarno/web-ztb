const connect = require("../../../../../../sqliteConnection")

export default async function handler(req, res) {
    if(req.method == "GET"){
        const {product_num_or_id} = req.query
        const db = await connect()
        const product = await db.all("select * from product where id= ?", Number(product_num_or_id))
        res.status(200).json(product)
    }

    if(req.method == "PUT"){
        const {product_num_or_id} = req.query
        if(!(req.body.name || req.body.category || req.body.price || req.body.status)){
            res.status(400).send({message : "insufficient body"})
            return
        }
        const db = await connect()
        const oldData = await db.all("select * from product where id = ?", Number(product_num_or_id))
        if(oldData.length !== 1){
            res.status(400).send({message : "data not found or duplicated"})
            return
        }

        const data = {
            name : req.body.name || oldData[0].name,
            category : req.body.category || oldData[0].category,
            price : req.body.price || oldData[0].price,
            status : req.body.status || oldData[0].status
        }
        
        
        const result = await db.run("update product set name = ?, category = ?, price = ?, status = ? where id = ?", data.name, data.category, data.price, data.status, Number(product_num_or_id))
        if(result.changes == 1){
            res.status(200).send({message : "success"})
        }else{
            res.status(200).send({message : "failed"})
        }
    }

    if(req.method == "DELETE"){
        const {product_num_or_id} = req.query
        const db = await connect()
        const result = await db.run("delete from product where id = ?", Number(product_num_or_id))
        if(result.changes == 1){
            res.status(200).send({message : "success"})
        }else{
            res.status(200).send({message : "failed"})
        }
    }
}