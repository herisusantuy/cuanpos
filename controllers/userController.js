const { User } = require('../models/index')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)




// // hash password dengan salt 
// var hash = bcrypt.hashSync("my password", salt)

// var hashPassword = bcrypt.hashSync("iniSaya", salt);
// // "iniSaya" yang nantinya akan di hash dengen salt.
// console.log(salt)
// console.log(hash)
// console.log(hashPassword) 

class UserController {
    static addUser(req, res) {
        let hashPassword = bcrypt.hashSync('P@ssword', salt)
        // console.log(hashPassword)
        let newUser = {
            name: 'Sulis Tayo',
            password: hashPassword,
            role: 'Manager',
            createdAt: new Date,
            updatedAt: new Date
        }
        // res.send(newUser)
        // User.create(newUser)
        //     .then(() => {
        //         res.send('berhasil update data')
        //     })
    }
    // static login(req, res) {
    //     bcrypt.compare("iniSaya", hash, function (err, res) {

    //     })
    // }
<<<<<<< HEAD
    static renderLoginPage(req, res) {
        res.render('login.ejs')
    }
    static postLogin(req, res) {
        User.findOne({ where: { password: req.body.password } })
            .then(data => {
                if (data.password == req.body.password) {
                    req.session.user = { name: data.name, role: data.role }
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
=======

 
  

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
>>>>>>> df84248c51aed6258f7d5746682436ee31921a47

    static renderDashboard(req, res) {
        res.render('dashboard.ejs')
    }
}

module.exports = UserController