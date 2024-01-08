const React = require('react')
const Default = require('../default.jsx')

function Show ({data}) {
    return (
        <Default>
            <h3>{data.favorites.country}</h3>
            <img src={data.favorites.image} alt={data.favorites.country} />
            <a href={`/favorites/${data.favorites.id}/edit`}><button>Edit</button></a>
            <form action={`/favorites/${data.favorites.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
            </form>
            <li><a href="./home">Go home</a></li>
        </Default>
    )
}

module.exports = Show