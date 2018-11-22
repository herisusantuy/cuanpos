const { Order } = require('../models/index')


class OrderController {
    static createOrder(req, res) {
        // console.log('ini di createorder', req.session.user)
        let newOrder = {
            ItemId: req.params.itemId,
            TableId: req.session.user.TableId,
            qty: req.body.qty
        }
        Order.create(newOrder)
            .then(data => {
                // res.send('berhasil nambah dah pokoknya')
                res.redirect('/item/' + req.session.user.TableId)
            })
            .catch(err => {
                res.send(err)
            })
    }

}

module.exports = OrderController