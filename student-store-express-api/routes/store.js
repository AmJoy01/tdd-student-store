const express = require("express")
const router = express.Router()
const Store = require("../models/store")
const { BadRequestError, NotFoundError } = require("../utils/errors")

router.get("/store", async (req, res, next) => {
    try {
        const products = await Store.listProductId()
        return res.status(200).json({ "products": products })
    } catch (error) {
        next(error)
    }

})
router.get("/store/:productId", async (req, res, next) => {
    try {
        const productId = req.params.productId
        const product = await Store.fetchProductById(productId)
        if (!product) throw new NotFoundError("No product found")
        return res.status(200).json({ "products": product })
    } catch (error) {
        next(error)
    }

})

//Witness me. Somethig is wrong with me
router.post('/store', async (req, res, next) => {
    try {
        const newOrder = req.body
        // const user = req.body.user
        if (!newOrder) return next(new BadRequestError("No order found in request"))
        const purchase = await Store.createOrder(newOrder)
        return res.status(201).json({ purchase })
    } catch (err) {
        next(err)
    }
})

module.exports = router