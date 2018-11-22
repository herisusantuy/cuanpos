const { Transaction } = require('../models/index')


class TransactionController {
    static addTransaction(req, res) {
        let newTransaction = {
            transactionDate: new Date,
            TableId: req.body,
            covers: req.body,
            ItemId: req.body,
            qty: req.body,
            UserId: req.body,
            TransactionType: req.body
        }
        Transaction.create()
    }

}

module.exports = TransactionController