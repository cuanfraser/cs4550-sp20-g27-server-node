const repositoryModel = require('../models/repository/repository.model.server')

const findRepositoryById = (id) => repositoryModel.findOne({ _id: id })
const findAllRepositories = () => repositoryModel.find()
const createRepository = (repository) =>
    repositoryModel.create(repository)
const updateRepository = (id, updatedRepo) =>
    repositoryModel.findOneAndUpdate({_id: id }, updatedRepo)

module.exports = { findRepositoryById, createRepository, findAllRepositories, updateRepository }