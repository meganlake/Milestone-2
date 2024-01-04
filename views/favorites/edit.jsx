const React = require('react')

function Edit ({location}) {
    return (
    <Default>
        <h2>Edit a location</h2>
        <form action={`/favorites/${location.id}?_method=PUT`} method="POST"></form>
    </Default>)
}

module.exports = Edit