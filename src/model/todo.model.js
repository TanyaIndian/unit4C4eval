// Todo Model



// title ( String, required )
// createdAt
// updatedAt
const mongoose = require("mongoose")
const todoSchema = new mongoose.Schema({
    title:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,refer:"user",required:true}

},
{
    timestamps:true,
    versionKey:false
})

const Todo = mongoose.model("todo",todoSchema)

module.exports = Todo