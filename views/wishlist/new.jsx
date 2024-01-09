const React = require('react')
const Default = require('../Default')

function new_form() {
    return (
        <Default>
            <main>
                <h1>Add a New Place on Wishlist</h1>
                <form method='POST' action='/wishlist'>
                    <div className=''>
                        <label htmlFor='country'>Country Name</label>
                        <input className='' id='country' name='country' required />
                    </div>
                    <div className=''>
                        <label htmlFor='city'>City/Town Name</label>
                        <input className='' id='city' name='city' />
                    </div>
                    <div className=''>
                        <label htmlFor='pic'>Place Picture</label>
                        <input className='' type='url' id='pic' name='pic' />
                    </div>
                    <div className=''>
                        <label htmlFor='rating'>Rating/How Badly I Want to Visit!</label>
                        <input className='' type='number' max='10' id='rating' name='rating' required />
                    </div>
                        <input className='' type='submit' value='Add New Place on Wishlist' />
                </form>
            </main>
        </Default>
    )
}

module.exports = new_form