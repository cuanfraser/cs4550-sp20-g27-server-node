const usersDao = require('../daos/users.daos.server')
const findAllUsers = () => usersDao.findAllUsers()
const findUserById = (id) => usersDao.findUserById(id)
const createUser = (user) => usersDao.createUser(user)
const findUserByCredentials = (username, password) => usersDao.findUserByCredentials(username, password)
module.exports = { findAllUsers, findUserById, createUser, findUserByCredentials }