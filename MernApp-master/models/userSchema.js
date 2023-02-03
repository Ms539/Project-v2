const mongoose = require ('mongoose')


const userSchema = new mongoose.Schema ({

    name : {
        type: String,
        required: true
    } ,

    email : {
        type: String,
        required: true,
        unique : true
    } ,

    Password : {
        type: String,
        required: true
    } ,

    Role : {
        type: Number ,
        default : 0
    }

}, {timestamps : true})

module.exports = mongoose.model('user' , userSchema )