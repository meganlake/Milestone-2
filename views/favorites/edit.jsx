const React = require('react')
const Default = require('../default.jsx')

function Edit ({location}) {
    return (
        <Default>
        <main>
            <h1>Edit Favorites</h1>
            <form method="POST" action={`/favorites/${data.location.id}?_method=PUT`}>
                <div className=''>
                    <label htmlFor='pic'>Place Picture</label>
                    <input 
                    className='' 
                    id='pic' 
                    name='pic' 
                    value={data.location.pic} 
                    required />
                    </div>
                <div className=''>
                    <label htmlFor='country'>Country Name</label>
                    <input 
                    className='' 
                    id='country' 
                    name='country' 
                    value={data.location.country} />
                </div>
                <div className=''>
                    <label htmlFor='city'>City/Town Name</label>
                    <input 
                    className='' 
                    id='city' 
                    name='city' 
                    value={data.location.city} />
                </div>
                <div className=''>
                    <label htmlFor='rating'>Rating</label>
                    <input 
                    className='' 
                    id='rating' 
                    name='rating' 
                    value={data.location.rating} />
                </div>
                    <input 
                    className='' 
                    type='submit' 
                    value='Update Favorites' />
            </form>
        </main>
    </Default>
    )
}

module.exports = Edit