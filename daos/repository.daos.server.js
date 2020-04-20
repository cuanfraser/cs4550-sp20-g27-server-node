const repositoryModel = require('../models/repository/repository.model.server')

const findRepositoryById = (id) => repositoryModel.findOne({ _id: id })
const findAllRepositories = () => repositoryModel.find()
const createRepository = (repository) =>
    repositoryModel.create(repository)
const updateRepository = (id, updatedRepo) =>
    repositoryModel.findOneAndUpdate({_id: id }, updatedRepo)
const deleteRepository = (id) =>
    repositoryModel.deleteOne({_id: id})

module.exports = { findRepositoryById, createRepository, findAllRepositories, updateRepository, deleteRepository }