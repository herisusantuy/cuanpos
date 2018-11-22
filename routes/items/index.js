const router = require('express').Router()
const ItemController = require('../../controllers/itemController')


router.post('/add', ItemController.postAddItem)
router.get('/:tableId', ItemController.listItem)


module.exports = router