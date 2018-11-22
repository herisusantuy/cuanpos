const {Item} = require('../models')

class ItemController {
    static postAddItem(req, res) {
        let newItem = {name: req.body.name, price: req.body.price}
        Item.create(newItem)
            .then(data => {
                // res.send(data)
                res.redirect('/user/dashboard?info=Add%20item%20success!!')
            })
            .catch(err => {
                res.send(err)
            })
    }   
}

module.exports = ItemController