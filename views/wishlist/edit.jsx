const React = require('react')
const Default = require('../default.jsx')

function edit_form (data) {
    return (
        <Default>
            <main>
                <h1>Edit Wishlist</h1>
                <form method="POST" action={`/wishlist/${data.place.id}?_method=PUT`}>
                    <div className=''>
                        <label htmlFor='pic'>Place Picture</label>
                        <input className='' id='pic' name='pic' value={data.place.pic} required />
                        </div>
                    <div className=''>
                        <label htmlFor='country'>Country Name</label>
                        <input className='' id='country' name='country' value={data.place.country} />
                    </div>
                    <div className=''>
                        <label htmlFor='city'>City/Town Name</label>
                        <input className='' id='city' name='city' value={data.place.city} />
                    </div>
                    <div className=''>
                        <label htmlFor='rating'>Rating/How Badly I Want to Visit!</label>
                        <input className='' id='rating' name='rating' value={data.place.rating} />
                    </div>
                        <input className='' type='submit' value='Update Wishlist' />
                </form>
            </main>
        </Default>
    )
}

module.exports = edit_form