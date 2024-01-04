const React = require('react')
const Default = require('./default')

function Index () {
    return(
        <Default>
            <h1>Travel Diary Website</h1>
            <h2>Favorites</h2>
            <img/>
            <button>Favorites</button>
            <h2>Wishlist</h2>
            <img/>
            <button>Wishlist</button>
        </Default>
    )
}

module.exports = Index