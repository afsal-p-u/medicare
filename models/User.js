const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false},
    number: {type: Number, required: true},
    age: {type: Number, required: true},
    city: {type: String, required: true},
    gender: {type: String, required: true}
})

module.exports = mongoose.model("user", UserSchema)