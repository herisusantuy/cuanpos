const router = require('express').Router()
const user = require('./users/index')


router.use('/user', user)


module.exports = router