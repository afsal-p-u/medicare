const mongoose = require('mongoose')

const ServicesSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    age: {type: Number, required: true},
    contact: {type: String, required: true},
    address: {type: String, required: true},
    category: {type: String, required: true},
    city: {type: String, required: true},
    describe: {type: String, required: true},
    gender: {type: String, required: true},
    status: {type: String, default: "pending"},
    result: {type: String},
})

module.exports = mongoose.model("services", ServicesSchema)