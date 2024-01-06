const React = require('react')
const Default = require('./default')
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Index () {
    return(
        <Default>
            <h1>Travel Diary</h1>
            <div className='card-container'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1575548384252-411ab3abf741?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="overhead viev of a town" />
                    <Card.Body>
                        <Card.Title>Favorites</Card.Title>
                        <Card.Text>
                        Where you've traveled to and loved.
                        </Card.Text>
                        <Button variant="primary" href="./favorites/all">See all</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='card-container'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1677620333923-f687949bde38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="roadside"/>
                    <Card.Body>
                        <Card.Title>Wishlist</Card.Title>
                        <Card.Text>
                        Where you would love to travel to.
                        </Card.Text>
                        <Button variant="primary" href="/wishlist">See all</Button>
                    </Card.Body>
                </Card>
            </div>
        </Default>
    )
}

module.exports = Index