const repositoryDaos = require('../daos/repository.daos.server')

const findAllRepositories = () => repositoryDaos.findAllRepositories()
const findRepositoryById = (id) => repositoryDaos.findRepositoryById(id)
const createRepository = (repository) => repositoryDaos.createRepository(repository)
const updateRepository = (id, repository) => repositoryDaos.updateRepository(id, repository)

module.exports = { findAllRepositories, findRepositoryById, createRepository, updateRepository }