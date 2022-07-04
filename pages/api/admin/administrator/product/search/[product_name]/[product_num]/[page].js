const connect = require("../../../../../../../../sqliteConnection")

export default async function handler(req, res) {
    if(req.method == "GET"){
        const {product_name, product_num, page} = req.query
        const db = await connect()
        let product_name_parsed = product_name.replace(/\_/g, " ")
        const product = await db.all("select * from product where name = ? limit ? offset ?", product_name_parsed, Number(product_num), Number(product_num) * (Number(page) - 1))
        res.status(200).send(product)
    }
}