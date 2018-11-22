const { Table } = require('../models/index')



class TableController {
    static displayTable(req, res) {
        Table.findAll()
            .then(tables => {
                res.render('./tables/table.ejs', { tables })
            })
    }
}

module.exports = TableController