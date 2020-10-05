const APP_NAME = 'LinkerDb';

const mongoose = require('mongoose')
const config = require('config')
const connectionString = config.get("mongoURI")
const connecionStrinLocal = `mongodb://localhost/${APP_NAME}`

const connectDb = async () => {
    await mongoose.connect(connecionStrinLocal, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log(`Status: Connected to ${APP_NAME}`)
    })
    .catch(err => {
        console.log(`Status: Connection failed`)
        console.log(`Description: ${err}`)
        process.exit(1);
    })
}
module.exports = connectDb;