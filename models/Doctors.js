const mongoose = require('mongoose')

const DoctorSchema = mongoose.Schema({
    name: {type: String, required: true},
    category: {type: String, required: true},
})

module.exports = mongoose.model('doctors', DoctorSchema)