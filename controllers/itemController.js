const { Item, Table, Order } = require('../models')
const formatUang = require('../helpers/formatUang')


class ItemController {
    static postAddItem(req, res) {
        let newItem = { name: req.body.name, price: req.body.price }
        Item.create(newItem)
            .then(data => {
                res.redirect('/user/dashboard?info=Add%20item%20success!!')
            })
            .catch(err => {
                res.send(err)
            })
    }
    static listItem(req, res) {
        console.log(req.session)
        Promise.all([Table.findOne({
            where: {
                id: req.params.tableId
            },
            include: {
                model: Item
            }

        }), Item.findAll()])
            .then(menus => {
                // res.send(menus)
                req.session.user.TableId = menus[0].id
                // console.log('=====>', menus)
                // res.send(menus)

                res.render('./transactions/listMenu.ejs', { menus, formatUang })
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = ItemController