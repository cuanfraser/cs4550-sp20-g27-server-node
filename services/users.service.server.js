const usersDao = require('../daos/users.daos.server')
const findAllUsers = () => usersDao.findAllUsers()
const findUserById = (id) => usersDao.findUserById(id)
const createUser = (user) => usersDao.createUser(user)
module.exports = { findAllUsers, findUserById, createUser }