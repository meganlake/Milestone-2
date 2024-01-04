const favorites = require('express').Router()
const db = require('../models')

//Home Page
favorites.get('/', (req, res) => {
    db.Favorite.find()
    .then((favorites) => {
        res.render('favorites/all', { favorites })
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

//View New Page
favorites.get('/new', (req, res) => {
    res.render('favorites/new')
})

//Add New Favorite
favorites.post('/', (req, res) => {
    db.Favorite.create(req.body)
        .then(() => {
            res.redirect('/favorites')
        })
        .catch((err) => {
            console.log('err', err)
            res.render('error404')
        })
})

//View Favorites
favorites.get('/:id', (req, res) => {
    db.Favorite.findById(req.params.id)
        .then((favorite) => {
            res.render('favorites/show', { favorite })
        })
        .catch((err) => {
            console.log('err', err)
            res.render('error404')
        })
})

//View Edit Page
favorites.get('/:id/edit', (req, res) => {
    db.Favorite.findById(req.params.id)
        .then((favorite) => {
            res.render('favorites/edit', { favorite })
        })
        .catch(err => {
            res.render('error404')
        })
})

//Edit a Favorite
favorites.put('/:id', (req, res) => {
    db.Favorite.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/favorites/${req.params.id}`)
        })
        .catch((err) => {
            console.log('err', err)
            res.render('error404')
        })
})

//Delete a Favorite
favorites.delete('/:id', (req, res) => {
    db.Favorite.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/favorites')
        })
        .catch((err) => {
            console.log('err', err)
            res.render('error404')
        })
})

module.exports = favorites