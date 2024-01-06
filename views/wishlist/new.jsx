const React = require('react')
const Default = require('../default.jsx')

function new_form() {
    return (
        <Default>
            <main>
                <h1>Add a New Place on Wishlist</h1>
                <form method='POST' action='/places'>
                    <div className=''>
                        <label htmlFor='pic'>Place Picture</label>
                        <input className='' type='url' id='pic' name='pic' required />
                    </div>
                    <div className=''>
                            <label htmlFor='country'>Country Name</label>
                            <input className='' id='country' name='country' />
                    </div>
                    <div className=''>
                            <label htmlFor='city'>City/Town Name</label>
                            <input className='' id='city' name='city' />
                    </div>
                    <div className=''>
                            <label htmlFor='rating'>Rating</label>
                            <input className='' type='number' id='rating' name='rating' />
                    </div>
                            <input className='' type='submit' value='Add New Place on Wishlist' />
                </form>
            </main>
        </Default>
    )
}

module.exports = new_form