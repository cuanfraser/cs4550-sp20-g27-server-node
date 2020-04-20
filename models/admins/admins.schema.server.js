const mongoose = require('mongoose')
const adminsSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true, dropDups: true },
    password: { type: String, required: true },
    firstname: String,
    lastname: String,
    email: { type: String, lowercase: true, validate: [checkEmail, 'Email invalid'] },
}, { collection: 'admins' })
module.exports = adminsSchema

const checkEmail = (email) => {
    var chars = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return chars.test(email)
};