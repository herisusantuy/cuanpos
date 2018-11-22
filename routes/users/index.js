const router = require('express').Router()
const UserController = require('../../controllers/userController')
const roleCheck = require('../../middleware/roleCheck')



router.get('/login', UserController.renderLoginPage)
router.post('/login', UserController.postLogin)
router.get('/home', UserController.postLogin)
router.get('/dashboard', roleCheck, UserController.renderDashboard)
router.post('/add', UserController.addUser)


module.exports = router