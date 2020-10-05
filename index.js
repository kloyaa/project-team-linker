const express = require('express')
const app = express();
const connectDb = require('./config/connection')

//Run connection
connectDb();

// @Init use of middleware
app.use(express.json({ 
    extended: false 
}))

// @Init use of routes
app.use('/api/users', require('./api/users'))
app.use('/api/profile', require('./api/profile'))
app.use('/api/posts', require('./api/posts'))
app.use('/api/auth', require('./api/auth'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})