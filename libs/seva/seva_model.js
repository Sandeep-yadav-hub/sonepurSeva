const mongoose = require('mongoose')
const sevaSchema = mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    seva:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    address:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Seva", sevaSchema)
