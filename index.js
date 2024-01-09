//Dependencies
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// Configuaration
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)
const app = express()

// Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//Controllers
app.use('/wishlist', require('./controllers/wishlist_controller'))
app.use('/favorites', require('./controllers/favorites_controller'))

//Routes
app.get('/', (req, res) => {
    res.render('home')
})

// Mongo-Mongoose Connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
})

//Listen
app.listen(PORT, () => {
    console.log("listening on port", PORT)
})