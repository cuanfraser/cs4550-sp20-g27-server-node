const mongoose = require('mongoose')
const adminsSchema = require('./admins.schema.server')
const adminModel = mongoose.model(
    'AdminModel',
    adminsSchema
)
module.exports = adminModel