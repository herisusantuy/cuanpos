const router = require('express').Router()



router.get('/', (req, res) => {
    // res.send('form table')
    res.render('./tables/table.ejs')
})


module.exports = router