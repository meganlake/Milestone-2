const mongoose = require('mongoose')
const { Schema } = mongoose

const wishlistSchema = new mongoose.Schema({
    _id: { type: Schema.Types.ObjectId },
    country: { type: String, required: true },
    city: { type: String, defaultValue: '' },
    pic: { type: String, defaultValue: 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    rating: { type: Number, required: true }
})

module.exports = mongoose.model('Wishlist', wishlistSchema)