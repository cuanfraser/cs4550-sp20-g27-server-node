const mongoose = require('mongoose')
const adminsSchema = require('./admins.schema.server')
const adminModel = mongoose.model(
    'adminModel',
    adminsSchema
)
module.exports = adminModel