const { User } = require('../models/index')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

class UserController {
    static addUser(req, res) {
        let hashPassword = bcrypt.hashSync(req.body.password, salt)
        let newUser = {
            name: req.body.name,
            password: hashPassword,
            role: req.body.role,
            createdAt: new Date,
            updatedAt: new Date
        }
        // res.send(newUser)
        User.create(newUser)
            .then(() => {
                // res.send('berhasil update data')
                res.redirect('/user/dashboard')
            })
    }
    static renderLoginPage(req, res) {
        res.render('login.ejs', { errors: req.query.errors })
    }

    static postLogin(req, res) {
        User.findOne({ where: { name: req.body.name } })
            .then(data => {
                if (bcrypt.compareSync(req.body.password, data.password)) {
                    req.session.user = { name: data.name, role: data.role }
                    res.render('home.ejs', { session: req.session.user })
                } else {
                    res.redirect('/user/login?errors=Username%20or%20password%20salah!!')
                }
            })
            .catch(err => {
                res.send(err)
            })
    }

    static renderDashboard(req, res) {
        res.render('dashboard.ejs')
    }
}

module.exports = UserController