const React = require('react')
const Default = require('../default.jsx')

function New ({location}) {
    return (
        <Default>
            <h2>Add a new location!</h2>
            <form action="/favorites" method="POST">
                <label htmlFor="name">City/Town Name</label>
                <input
                    type="text"
                    name="city"
                    id="city"
                    required
                />
                <label htmlFor='country'>Country Name</label>
                <input 
                type="text"
                id='country' 
                name='country' />
                <label htmlFor="image">Favorite Picture</label>
                <input
                    type="url"
                    name="pic"
                    id="pic" /> 
                <br />
                <label htmlFor="rating">Rating</label>
                <input
                    type="number"
                    name="rating"
                    id="rating"
                    required />
            </form>
            <div className="backButton">
                <a href="/favorites"><button>Submit New Favorite</button></a>
            </div>
        </Default>
    )
}

module.exports = New   