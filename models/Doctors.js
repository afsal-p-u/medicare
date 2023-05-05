const mongoose = require('mongoose')

const DoctorSchema = mongoose.Schema({
    name: {type: String, required: true},
    category: {type: String, required: true}, 
    img: {type: String}
})

module.exports = mongoose.model('doctors', DoctorSchema) 
