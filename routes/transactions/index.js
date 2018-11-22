const router = require('express').Router()
const TransactionController = require('../../controllers/transactionController')


router.post('/', TransactionController.addTransaction)



module.exports = router


