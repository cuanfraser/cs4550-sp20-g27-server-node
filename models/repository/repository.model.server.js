const mongoose = require('mongoose')
const repositorySchema = require('./repository.schema.server')
const repositoryModel = mongoose.model(
    'RepositoryModel',
    repositorySchema
)
module.exports = repositoryModel