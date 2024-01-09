const React = require('react')
const Default = require('../default.jsx')

function index (data) {
  let locationFormatted = data.location.map((country, index) => {
    return (
      <div className=''>
        <h2>
          <a href={`/location/${country.id}`} >
            {country.name}
          </a>
        </h2>
        <p className=''>
          {city.name}
        </p>
        <img src={country.pic} alt={country.name} />
      </div>
    )
  })  
  return (
    <Default>
        <main>
            <h1>My Favorite Places!</h1>
            <div className=''>
              {locationFormatted}
            </div>
        </main>
    </Default>
  )
}

  
module.exports = index