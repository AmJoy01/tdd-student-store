const express = require("express")
const router = express.Router()
// const Store = require("../models/store")
const { listProductId } = require("../models/store")

router.get("/:productId", async (req, res, next) => {
    try {
        const productId = req.params.productId
        const products = await listProductId(productId)
        return res.status(200).json({ products })
    } catch (error) {
        next(error)
    }

})

module.exports = router