const router = require('express').Router()
const UserController = require('../../controllers/userController')

router.post('/', UserController.addUser)
router.post('/', UserController.addUser)

router.get('/login', UserController.renderLoginPage)
router.post('/login', UserController.postLogin)
router.get('/dashboard', UserController.renderDashboard)


module.exports = router