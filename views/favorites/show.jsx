const React = require('react')
const Default = require('../default.jsx')

function Show ({location}) {
    return (
        <Default>
            <h3>{location.name}</h3>
            <img src={location.image} alt={location.name} />
            <a href={`/favorites/${location.id}/edit`}><button>Edit</button></a>
            <form action={`/favorites/${location.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
            </form>
            <li><a href="/default.jsx">Go home</a></li>
        </Default>
    )
}

module.exports = Show