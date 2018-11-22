const router = require('express').Router()
const UserController = require('../../controllers/userController')


router.get('/login', UserController.renderLoginPage)
router.post('/login', UserController.postLogin)
router.get('/dashboard', UserController.renderDashboard)


module.exports = router