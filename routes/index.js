const router = require('express').Router()
const user = require('./users/index')
const table = require('./tables/index')


router.get('/', (req, res) => {
    // res.send('hellllo world')
})

router.use('/user', user)
router.use('/table', table)


module.exports = router