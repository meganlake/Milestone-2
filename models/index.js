require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

module.exports.Favorite = require('./favorites')
module.exports.Wishlist = require('./wishlist')