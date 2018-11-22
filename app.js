const express = require('express')
const session = require('express-session')
const app = express()
const port = 3003
const indexRoutes = require('./routes/index')

app.set('view-engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(session({ secret: 'cuanpos' }))

app.use('/', indexRoutes)

app.listen(port, () => {
    console.log(`Application running on port:${port}`)
})