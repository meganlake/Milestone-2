const React = require('react')
const Default = require('../default.jsx')

function show (data) {
    return (
        <Default>
          <main>
            <h1>{data.place.name}</h1>
            <img src={data.place.pic} alt={data.place.name} />
            <h2>Rating</h2>
              {rating}
            <h2>Comments</h2> 
              {comments}
            <h3>Located in {data.place.city}, {data.place.state}</h3>
            <a href={`/places/${data.place.id}/edit`} className=''> 
              Edit
            </a>  
            <form method='POST' action={`/places/${data.id}?_method=DELETE`}> 
            <button type='submit' className=''>
            Delete
            </button>
            </form>
            <h2>Comments</h2>
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
                  <label htmlFor='author'>Author</label>
                  <input id='' name='' className='' />
                </div>
                <div className=''>
                  <label htmlFor='rating'>Rating</label>
                  <input type='range' step='0.5' min='1' max='10' id='rating' name='rating' className='' />
                </div>
              </div>
              <input type='submit' className='' value='Add Comment' />
            </form>   
          </main>
        </Default>
    )  
}

module.exports = show