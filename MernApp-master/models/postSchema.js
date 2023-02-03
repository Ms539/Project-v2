const mongoose = require ('mongoose')



const PostSchema = new mongoose.Schema ({
    title : String , 
    description : String,

    owner : {
        type : mongoose.Types.ObjectId,
        ref : 'user'
    } ,

    image : {
        type : mongoose.Schema.Types.Mixed
    }

} , {timestamps : true}
)

module.exports = mongoose.model('post', PostSchema)