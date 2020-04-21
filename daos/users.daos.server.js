const usersModel = require('../models/users/users.model.server')

const findUserById = (id) => usersModel.find({ _id: id })
const findAllUsers = () => usersModel.find()
const createUser = (user) =>
    usersModel.create(user)
const findUserByCredentials = (username, password) =>
    usersModel.findOne(
        {
            username: username,
            password: password
        })


module.exports = { findUserById, createUser, findAllUsers, findUserByCredentials }