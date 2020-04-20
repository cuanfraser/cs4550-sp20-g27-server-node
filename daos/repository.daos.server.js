const repositoryModel = require('../models/repository/repository.model.server')

const findRepositoryById = (id) => repositoryModel.find({ _id: id })
const findAllRepositories = () => repositoryModel.find()
const createRepository = (repository) =>
    repositoryModel.create(repository)

module.exports = { findRepositoryById, createRepository, findAllRepositories }