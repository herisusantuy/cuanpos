const router = require('express').Router()
const UserController = require('../../controllers/userController')



router.get('/login', UserController.renderLoginPage)
router.post('/login', UserController.postLogin)
router.get('/home', UserController.postLogin)
router.get('/dashboard', UserController.renderDashboard)
router.post('/add', UserController.addUser)
// router.post('/', UserController.addUser)
// router.post('/', UserController.addUser)


module.exports = router