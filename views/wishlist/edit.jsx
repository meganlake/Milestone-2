const React = require('react')
const Default = require('../Default')

function edit_form (data) {
    return (
        <Default>
            <main>
                <h1>Edit Wishlist</h1>
                <form method="POST" action={`/wishlist/${data.wishlist.id}?_method=PUT`}>
                    <div className=''>
                        <label htmlFor='pic'>Place Picture</label>
                        <input className='' id='pic' name='pic' defaultValue={data.wishlist.pic} required />
                        </div>
                    <div className=''>
                        <label htmlFor='country'>Country Name</label>
                        <input className='' id='country' name='country' defaultValue={data.wishlist.country} />
                    </div>
                    <div className=''>
                        <label htmlFor='city'>City/Town Name</label>
                        <input className='' id='city' name='city' defaultValue={data.wishlist.city} />
                    </div>
                    <div className=''>
                        <label htmlFor='rating'>Rating/How Badly I Want to Visit!</label>
                        <input className='' type='number' max='10' id='rating' name='rating' defaultValue={data.wishlist.rating} />
                    </div>
                        <input className='' type='submit' defaultValue='Update Wishlist' />
                </form>
            </main>
        </Default>
    )
}

module.exports = edit_form