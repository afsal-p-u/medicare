const mongoose = require('mongoose')

const ProvidingServiceSchema = mongoose.Schema({ 
    serviceName: {type: String, required: true},
    imgUrl: {type: String}
})

module.exports = mongoose.model('providingServices', ProvidingServiceSchema)