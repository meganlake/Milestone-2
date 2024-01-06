const wishlists = require('express').Router()
const db = require('../models')

//Home Page
wishlists.get('/', (req, res) => {
    db.Wishlist.find()
    .then((wishlists) => {
        res.render('wishlist', { wishlists })
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

//View New Page
wishlists.get('/new', (req, res) => {
    res.render('wishlist/new')
})

//Add New Favorite
wishlists.post('/', (req, res) => {
    db.Wishlist.create(req.body)
        .then(() => {
            res.redirect('/wishlist')
        })
        .catch((err) => {
            console.log('err', err)
            res.render('error404')
        })
})

//View Favorites
wishlists.get('/:id', (req, res) => {
    db.Wishlist.findById(req.params.id)
        .then((wishlist) => {
            res.render('wishlist/show', { wishlist })
        })
        .catch((err) => {
            console.log('err', err)
            res.render('error404')
        })
})

//View Edit Page
wishlists.get('/:id/edit', (req, res) => {
    db.Wishlist.findById(req.params.id)
        .then((wishlist) => {
            res.render('wishlist/edit', { wishlist })
        })
        .catch(err => {
            res.render('error404')
        })
})

//Edit a Favorite
wishlists.put('/:id', (req, res) => {
    db.Wishlist.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/wishlist/${req.params.id}`)
        })
        .catch((err) => {
            console.log('err', err)
            res.render('error404')
        })
})

//Delete a Favorite
wishlists.delete('/:id', (req, res) => {
    db.Wishlist.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/wishlist')
        })
        .catch((err) => {
            console.log('err', err)
            res.render('error404')
        })
})

module.exports = wishlists