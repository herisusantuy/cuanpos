const router = require('express').Router()
const TableController = require('../../controllers/tableController')



router.get('/', TableController.displayTable)


module.exports = router