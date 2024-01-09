const React = require('react')
const Default = require('../Default')
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function All (data) {
    let favoriteFormatted = data.favorites.map((Favorite) => {
        return (
            <div key="key" className='cards'>
                <div className='card-container' >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Favorite.pic} alt={Favorite.city} />
                        <Card.Body>
                            <Card.Title>{Favorite.city}, {Favorite.country}</Card.Title>
                            <Button variant="primary" href={`/favorites/${Favorite.id}`}>See More</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    })  
    return (
        <Default>
            <main>
                <h1>My Favorite Places!</h1>
                <div className="add-button">
                    <Button variant="primary" href="/favorites/new">Add New Place to Favorite</Button>
                </div>
                <div>
                    {favoriteFormatted}
                </div>
            </main>
        </Default>
    )
}


module.exports = All