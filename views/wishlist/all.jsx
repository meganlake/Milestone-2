const React = require('react')
const Default = require('../Default')
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function All (data) {
    let wishlistFormatted = data.wishlists.map((Wishlist) => {
        return (
            <div key="key" className='cards'>
                <div className='card-container' >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Wishlist.pic} alt={Wishlist.city} />
                        <Card.Body>
                            <Card.Title>{Wishlist.city}, {Wishlist.country}</Card.Title>
                            <Button variant="primary" href={`/wishlist/${Wishlist.id}`}>See More</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    })  
    return (
        <Default>
            <main>
                <h1>Places I Would Like to Travel to!</h1>
                <div className="add-button">
                    <Button variant="primary" href="/wishlist/new">Add New Place to Wishlist</Button>
                </div>
                <div>
                    {wishlistFormatted}
                </div>
            </main>
        </Default>
    )
}

module.exports = All