const router = require('express').Router()
const OrderController = require('../../controllers/orderController')

router.post('/add/:itemId', OrderController.createOrder)




module.exports = router