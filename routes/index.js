const router = require('express').Router()
const user = require('./users/index')
const table = require('./tables/index')
const item = require('./items')


router.get('/', (req, res) => {
    res.send('hellllo world')
})

router.use('/user', user)
router.use('/table', table)
router.use('/item', item)


module.exports = router