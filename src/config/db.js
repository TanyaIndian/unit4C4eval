// mongodb+srv://Tanya:kishuanisha24@cluster0.twigb.mongodb.net/page
const mongoose = require("mongoose")
const connect = ()=>
{
    return mongoose.connect("mongodb+srv://Tanya:kishuanisha24@cluster0.twigb.mongodb.net/unit4C4")
}

module.exports = connect