const React = require('react')
const Default = require('../default.jsx')
import Button from 'react-bootstrap/Button';

function All (data) {
    let wishlistFormatted = data.wishlists.map((Wishlist) => {
    return (
        <div className=''>
            <h2>
                <a href={`/wishlist/${Wishlist.id}`} >
                    {Wishlist.country}
                </a>
            </h2>
            <p className=''>
                {Wishlist.city}
            </p>
            <img src={Wishlist.pic} alt={Wishlist.city} />
        </div>
        )
    })  
    return (
        <Default>
            <main>
                <h1>Places I Would Like to Travel to!</h1>
                <div className=''>
                    {wishlistFormatted}
                </div>
                <Button variant="primary" href="/wishlist/new">Add New Place to Wishlist</Button>
            </main>
        </Default>
    )
}

module.exports = All