const mongoose = module.require('mongoose')
const messageSchema = mongoose.Schema({
       sender:{
        type:String,
        required:true,
        max_length:255
       },
       
       message:{
        type:String,
        required:true,
        max_length:1000
       },

       phone:{
        type:String,
        required:true,
        max_length:20
       }

})

module.exports = mongoose.model('users-messages', messageSchema)