const React = require('react')

function New ({location}) {
    return (
        <Default>
            <h2>Add a new location!</h2>
            <form action="/favorites" method="POST">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                />
                <label htmlFor="image">Images</label>
                <input
                    type="text"
                    name="image"
                    id="image"/> 
                <br />
                <label htmlFor="rating">Rating</label>
                <input
                    type="text"
                    name="rating"
                    id="rating"
                />
            </form>
            <div className="backButton">
                <a href="/default.jsx"><button>Go back to the home screen</button></a>
            </div>
        </Default>
    )
}

module.exports = New   