const usersModel = require('../models/users/users.model.server')

const findUserById = (id) => usersModel.find({ _id: id })
const findAllUsers = () => usersModel.find()
const createUser = (user) =>
    usersModel.create(user)
const updateUser = (id, user) =>
    usersModel.findOneAndUpdate({ _id: id }, user)
const findUserByCredentials = (username, password) =>
    usersModel.findOne(
        {
            username: username,
            password: password
        })


module.exports = { findUserById, createUser, findAllUsers, updateUser, findUserByCredentials }