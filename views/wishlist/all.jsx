const React = require('react')
const Default = require('../default.jsx')

function index (data) {
  let placesFormatted = data.places.map((country, index) => {
    return (
      <div className=''>
        <h2>
          <a href={`/places/${country.id}`} >
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
            <h1>Places I Would Like to Travel to!</h1>
            <div className=''>
              {placesFormatted}
            </div>
        </main>
    </Default>
  )
}

  
module.exports = index