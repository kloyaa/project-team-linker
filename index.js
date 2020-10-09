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
let profile = require('./controller/profile/PROFILE');
let newProfile = require('./controller/profile/PROFILE_NEW');
let profileExperience =  require('./controller/profile/PROFILE_EXPERIENCE');
let profileEducation =  require('./controller/profile/PROFILE_EDUCATION');
let profileGithub =  require('./controller/profile/PROFILE_GITHUB');

app.use('/api/profile', profile)
app.use('/api/profile/new', newProfile)
app.use('/api/profile/experience', profileExperience)
app.use('/api/profile/education', profileEducation)

app.use('/api/profile/', profileGithub)

app.use('/api/users/all', require('./controller/user/GET_USER_ALL'))
app.use('/api/profile', require('./controller/profile/PROFILE'))
app.use('/api/profile/post', require('./controller/profile/PROFILE_NEW'))
app.use('/api/profile/experience', require('./controller/profile/PROFILE_EXPERIENCE'))

app.use('/api/posts', require('./controller/posts'))
app.use('/api/auth', require('./controller/auth'))
app.use('/api/users', require('./controller/users'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})