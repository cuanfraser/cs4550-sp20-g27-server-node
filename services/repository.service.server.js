const repositoryDaos = require('../daos/repository.daos.server')
const findAllRepositories = () => repositoryDaos.findAllRepositories()
const findRepositoryById = (id) => repositoryDaos.findRepositoryById(id)
const createRepository = (repository) => repositoryDaos.createRepository(repository)
module.exports = { findAllRepositories, findRepositoryById, createRepository }