const { Table } = require('../models/index')



class TableController {
    static displayTable(req, res) {
        Table.findAll()
            .then(tables => {
                res.render('./tables/table.ejs', { tables })
            })
    }

    static postAddTable(req, res) {
        let newTable = {name: req.body.name, covers: req.body.covers}
        Table.create(newTable)
            .then(data => {
                res.redirect('/user/dashboard?info=Add%20table%20success!!')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = TableController