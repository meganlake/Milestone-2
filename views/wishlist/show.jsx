const React = require('react')
const Default = require('../Default')

function show (data) {
    return (
        <Default>
          <main>
            <h1>{data.wishlist.country}</h1>
            <img src={data.wishlist.pic} alt={data.wishlist.country} />
            <h2>Rating</h2>
              {data.wishlist.rating}
            <h3>Located in {data.wishlist.city}, {data.wishlist.country}</h3>
            <a href={`/wishlist/${data.wishlist.id}/edit`} className=''> 
              Edit
            </a>  
            <form method='POST' action={`/wishlist/${data.wishlist.id}?_method=DELETE`}> 
              <button type='submit' className=''>
                Delete
              </button>
            </form>
          </main>
        </Default>
    )  
}

module.exports = show