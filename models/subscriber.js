const mongoose = require('mongoose')

const subscriberSchema=new mongoose.Schema({
    message:{
        type: String,
        required:true

    }
})

module.exports =mongoose.model('Subscriber',subscriberSchema)
