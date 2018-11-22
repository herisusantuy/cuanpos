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
}

// UserController.addUser()



module.exports = UserController