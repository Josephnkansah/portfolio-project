const Order = require('./OrderSchema')
const takeOrder = async (req, res, next) => {
    const {productName, price, quantity, id} = req.body
    if (!productName || !price || !quantity || !id) return res.status(400).json('all fields are required')
    try {
        await Order.create({
            productName: productName,
            price: price,
            quantity: quantity,
            createdBy: id
        })
        res.status(200).json('your order was successful')
    } catch (error) {
        next(error)
    }
}

'665cabdcf6a72fac84df5435'

module.exports = {takeOrder}