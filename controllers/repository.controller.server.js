const repositoryService = require('../services/repository.service.server')
module.exports = function (app) {
    app.get('/api/repos', (req, res) =>
        repositoryService.findAllRepositories()
            .then(repos => res.json(repos)))
    app.get('/api/repos/:id', (req, res) =>
        repositoryService.findRepositoryById(req.params['id'])
            .then(repository => res.json(repository)))
    app.post('/api/repos', (req, res) =>
        repositoryService.createRepository(req.body)
            .then(repository => res.json(repository)))
    app.put('/api/repos/:id', (req, res) =>
        repositoryService.updateRepository(req.params['id'], req.body)
            .then(repository => res.json(repository)))
    app.delete('/api/repos/:id', (req, res) =>
        repositoryService.deleteRepository(req.params['id'])
            .then(resp => res.json(resp)))
}