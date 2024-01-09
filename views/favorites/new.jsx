const React = require('react')
const Default = require('../Default')

function New () {
    return (
        <Default>
            <main>
                <h1>Add a New Favorite Place</h1>
                <form method='POST' action='/favorites'>
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
                        <label htmlFor='rating'>Rating/How Much I Loved It!</label>
                        <input className='' type='number' max='10' id='rating' name='rating' required />
                    </div>
                        <input className='' type='submit' value='Add a New Favorite Place' />
                </form>
            </main>
        </Default>
    )
}

module.exports = New   