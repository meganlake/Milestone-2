const React = require('react')

function Default (html) {
    return (
        <html>
            <head>
            <title>Travel Diary</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
            <link rel="stylesheet" href="./main.css" />
            </head>
            <body>
                <div>
                    <h1>
                        NavBar
                    </h1>
                    {/* <div> {html.children} </div> */}
                </div>
            </body>
        </html>
    )
}

module.exports = Default