const React = require('react')
const Default = require('../default.jsx')

function show (data) {
    return (
        <Default>
          <main>
            <h1>{data.wishlist.country}</h1>
            <img src={data.wishlist.pic} alt={data.wishlist.country} />
            <h2>Rating</h2>
              {data.wishlist.rating}
            {/* <h2>Comments</h2> 
              {comments} */}
            <h3>Located in {data.wishlist.city}, {data.wishlist.country}</h3>
            <a href={`/wishlist/${data.wishlist.id}/edit`} className=''> 
              Edit
            </a>  
            <form method='POST' action={`/wishlist/${data.wishlist.id}?_method=DELETE`}> 
            <button type='submit' className=''>
              Delete
            </button>
            </form>
            {/* <h2>Comments</h2>
            <div className=''>
              {comments}
            </div>
            <hr />
            <h2>Got Your Own Comment?!</h2>
            <form action={`/places/${data.place.id}/comment`} method='post'>
              <div className=''>
                <div className=''>
                  <label htmlFor='content'>Content</label>
                  <textarea id='content' name='content' className=''></textarea>
                </div>
              </div>
              <div className=''>
                <div className=''>
                  <label htmlFor='author'>By:</label>
                  <input id='author' name='author' className='' />
                </div>
              </div>
              <input type='submit' className='' value='Add Comment' />
            </form>  */}
          </main>
        </Default>
    )  
}

module.exports = show