//////////////////////////
// import dependencies
/////////////////////////
// this allows us to load our env variables
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
// we'll also import our fruits model when we have it 



//////////////////////////
// create our express application object
/////////////////////////
const app = require('liquid-express-views')(express())



//////////////////////////
// Middleware
/////////////////////////
// this is for request logging
app.use(morgan('tiny'))
app.use(methodOverride('method'))
// parses urlencoded reques bodies
app.use(express.urlencoded({ extended: false }))
// to serve files from public statically
app.use(express.static('public'))

//////////////////////////
// ROUTES
/////////////////////////
app.get('/', (req, res) => {
    res.send('Your server is up and running')
})



//////////////////////////
// Server Listener
/////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`app is listening on port: ${PORT}`)
})


