const mongoose = require('mongoose');
const moment = require('moment')

const Schema = mongoose.Schema;


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


const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: { 
        type: String,
        required: true
    },
    name: { 
        type: String
    },
    avatar: {
        type: String
    },
    likes: [
        { 
            user: {
                type:  Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    comments: [
        { 
            user: {
                type:  Schema.Types.ObjectId,
                ref: 'users'
            },
            text: {
                type: String,
                required: true
            },
            name: { 
                type: String
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now()
            }

        }
    ],
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = Post = mongoose.model('post', PostSchema);