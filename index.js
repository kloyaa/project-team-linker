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

app.use('/api/profile', require('./controller/profile/PROFILE'))
app.use('/api/profile/new', require('./controller/profile/PROFILE_NEW'))
app.use('/api/profile/experience', require('./controller/profile/PROFILE_EXPERIENCE'))


app.use('/api/users/all', require('./controller/user/GET_USER_ALL'))

app.use('/api/users', require('./controller/users'))
app.use('/api/profile', require('./controller/profile'))
app.use('/api/posts', require('./controller/posts'))
app.use('/api/auth', require('./controller/auth'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})