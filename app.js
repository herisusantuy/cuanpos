const express = require('express')
const app = express()
const port = 3000
const indexRoutes = require('./routes/index')
app.set('view-engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.use('/', indexRoutes)



app.listen(port, () => {
    console.log(`Application running on port:${port}`)
})