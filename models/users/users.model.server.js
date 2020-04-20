const mongoose = require('mongoose')
const usersSchema = require('./users.schema.server')
const userModel = mongoose.model(
    'UserModel',
    usersSchema
)
module.exports = userModel