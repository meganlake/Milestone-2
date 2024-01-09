const React = require('react')
const Default = require('../Default')

function Edit (data) {
    return (
        <Default>
            {/* <head>
                <link rel="stylesheet" href='../public/main.css' />
            </head> */}
            <main>
                <h1>Edit Favorite</h1>
                <form method="POST" action={`/favorites/${data.favorites.id}?_method=PUT`}>
                    <div className=''>
                        <label htmlFor='pic'>Place Picture</label>
                        <input className='' id='pic' name='pic' defaultValue={data.favorites.pic} required />
                        </div>
                    <div className=''>
                        <label htmlFor='country'>Country Name</label>
                        <input className='' id='country' name='country' defaultValue={data.favorites.country} />
                    </div>
                    <div className=''>
                        <label htmlFor='city'>City/Town Name</label>
                        <input className='' id='city' name='city' defaultValue={data.favorites.city} />
                    </div>
                    <div className=''>
                        <label htmlFor='rating'>Rating/How Badly I Want to Visit!</label>
                        <input className='' type='number' max='10' id='rating' name='rating' defaultValue={data.favorites.rating} />
                    </div>
                        <input className='' type='submit' defaultValue='Update Favorite' />
                </form>
            </main>
        </Default>
    )
}

module.exports = Edit