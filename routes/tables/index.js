const router = require('express').Router()
const TableController = require('../../controllers/tableController')


router.get('/', TableController.displayTable)
router.post('/add', TableController.postAddTable)


module.exports = router