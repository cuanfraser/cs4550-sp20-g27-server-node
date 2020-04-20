const adminsDao = require('../daos/admins.daos.server')
const findAllAdmins = () => adminsDao.findAllAdmins()
const findAdminById = (id) => adminsDao.findAdminById(id)
const createAdmin = (admin) => adminsDao.createAdmin(admin)
module.exports = { findAllAdmins, findAdminById, createAdmin }