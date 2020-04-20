const usersModel = require('../models/users/users.model.server')

const findUserById = (id) => usersModel.find({ _id: id })
const findAllUsers = () => usersModel.find()
const createUser = (user) =>
    usersModel.create(user)

module.exports = { findUserById, createUser, findAllUsers }