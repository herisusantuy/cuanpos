const {User} = require('../models')

class UserController {
  

    static renderLoginPage(req, res) {
        res.render('login.ejs')
    }
    static postLogin(req, res) {
        User.findOne({where: {password: req.body.password}})
            .then(data => {
                if (data.password == req.body.password) {
                    req.session.user = {name: data.name, role: data.role}
                    // res.redirect()
                }
                else {
                    // res.redirect()
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