const mongoose = require('mongoose')
const usersSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true, dropDups: true },
    password: { type: String, required: true },
    firstname: String,
    lastname: String,
    github: String,
    email: { type: String, lowercase: true, validate: [checkEmail, 'Email invalid'] },
    joinDate: Date,
    role: String
}, { collection: 'users' })
module.exports = usersSchema

const checkEmail = (email) => {
    var chars = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return chars.test(email)
};