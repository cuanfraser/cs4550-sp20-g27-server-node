const adminsModel = require('../models/admins/admins.model.server')

const findAdminById = (id) => adminsModel.find({ _id: id })
const findAllAdmins = () => adminsModel.find()
const createAdmin = (user) =>
    adminsModel.create(user)

module.exports = { findAdminById, createAdmin, findAllAdmins }