const router = require('express').Router()
const UserController = require('../../controllers/userController')
<<<<<<< HEAD
<<<<<<< HEAD


router.post('/', UserController.addUser)
=======
>>>>>>> 7639b5b0102c2b8bfcf1e6039ff763e883570df5

=======

router.post('/', UserController.addUser)
>>>>>>> df84248c51aed6258f7d5746682436ee31921a47

router.get('/login', UserController.renderLoginPage)
router.post('/login', UserController.postLogin)
router.get('/dashboard', UserController.renderDashboard)


module.exports = router