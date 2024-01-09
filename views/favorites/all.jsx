// const React = require('react')
const Default = require('../default.jsx')

function all (data) {
  let favoritesFormatted = data.favorites.map((favorites) => {
    return (
      <div className=''>
        <h2>
          <a href={`/favorites/${favorites.id}`} >
            {favorites.country}
          </a>
        </h2>
        <p className=''>
          {favorites.city}
        </p>
        <img src={favorites.pic} alt={favorites.name} />
      </div>
    )
  })  
  return (
    <Default>
        <main>
            <h1>My Favorite Places!</h1>
            <div className=''>
              {favoriteFormatted}
            </div>
            <Button variant="primary" href="/favorite/new">Add New Place to Favorite</Button>
        </main>
    </Default>
  )
}

  
module.exports = index