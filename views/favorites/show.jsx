const React = require('react')
const Default = require('../Default')
import Button from 'react-bootstrap/Button';


function Show (data) {
    return (
        <Default>
            <main>
                <h1>{data.favorites.country}</h1>
                <img src={data.favorites.pic} alt={data.favorites.country} />
                <h2>Rating</h2>
                    {data.favorites.rating}
                <h3>Located in {data.favorites.city}, {data.favorites.country}</h3>
                <Button variant="primary" href={`/favorites/${data.favorites.id}/edit`}>Edit</Button>
                <form method='POST' action={`/favorites/${data.favorites.id}?_method=DELETE`}> 
                    <button type='submit' className=''>
                        Delete
                    </button>
                </form>
            </main>
        </Default>
    )
}

module.exports = Show