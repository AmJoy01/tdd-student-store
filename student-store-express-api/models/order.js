const { storage } = require("../data/storage")

class Order {
    static async listUserOrders(user) {
        const products = storage
            .get("products")
            .find({ id: Number(user) }).value()
        return products
    }
}

module.exports = Store