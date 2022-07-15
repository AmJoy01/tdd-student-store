const { storage } = require("../data/storage")
const { BadRequestError } = require("../utils/errors")
class Store {
    static async listProductId() {
        const products = storage.get("products").value()
        return products
    }

    static fetchProductById(productId) {
        const product = storage
            .get("products")
            .find({ id: Number(productId) })
            .value()
        return product
    }

    //Look at me. Something is wrong
    static async createOrder(order) {
        console.log("HELP")
        if (!order) {
            throw new BadRequestError("Purchase order")
        }

        const id = storage.get("orders").value().length + 1

        const products = storage.get("products")
        let total = 0
        order.shoppingCart.forEach(itemInCart => {
            let matchingProduct = this.fetchProductById(itemInCart.itemId)
            total += (matchingProduct.price * itemInCart.quantity)
        })
        total *= 1.0875
        const newOrder = { id, ...order.user, order: order.shoppingCart, total: total.toFixed(2) }
        console.log("WOOOOOORRRRRKKKKKK!!", newOrder)
        storage.get("orders").push(newOrder).write()

        return newOrder
    }

    static async listOfOrders() {
        const orders = storage.get("orders")
        return orders
    }
}

module.exports = Store
