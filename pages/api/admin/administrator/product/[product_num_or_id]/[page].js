const connect = require("../../../../../../sqliteConnection")

export default async function handler(req, res) {
    if(req.method == "GET"){
        const {product_num_or_id, page} = req.query
        const db = await connect()
        const product = await db.all("select * from product limit ? offset ?", Number(product_num_or_id), Number(product_num_or_id) * (Number(page) - 1))
        res.status(200).send(product)
    }
}
