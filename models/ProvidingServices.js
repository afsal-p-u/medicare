const mongoose = require('mongoose')

const ProvidingServiceSchema = mongoose.Schema({
    serviceName: {type: String, required: true}
})

module.exports = mongoose.model('providingServices', ProvidingServiceSchema) 