function roleCheck(req, res, next) {
    if (req.session.user.role == 'manager') {
        next()
    }
    else {
        res.send(err)
    }
}

module.exports = roleCheck