const { storage } = require("../data/storage")

class Store {
    static async listProductId(productId) {
        const products = storage
            .get("products")
            .find({ id: Number(productId) }).value()
        return products
    }
}

module.exports = Store
