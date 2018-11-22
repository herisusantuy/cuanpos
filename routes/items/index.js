const router = require('express').Router()
const ItemController = require('../../controllers/itemController')

router.post('/add', ItemController.postAddItem)

module.exports = router