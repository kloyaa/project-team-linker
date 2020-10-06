const mongoose = require('mongoose')
const moment = require('moment')

function date() {
    let date = new Date();
    let getDay = date.getDate()
    let formattedDate = "";

    switch(true) {
        case getDay < 10 :
            formattedDate = "0" + getDay.toString()
            break;
        default: 
            formattedDate = getDay;
    }
    return formattedDate
}


let dateToday = new Date();
let yearNow = dateToday.getFullYear();
let monthNow = dateToday.getMonth() + 1;
let dateNow = date();

let dateJoinedFormatted = `${yearNow}${monthNow}${dateNow}`

const UserSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true
   },
   email: {
       type: String,
       required: true,
       unique: true
   },
   password: {
       type: String,
       required: true
   },
   avatar: {
       type: String
   },
   dateJoined: { 
       type: [String],
       default: [moment().format('LLLL'), parseInt(dateJoinedFormatted)]
   }
})

module.exports = User = mongoose.model('user', UserSchema)