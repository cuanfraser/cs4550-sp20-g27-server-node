const usersService = require('../services/users.service.server')
module.exports = function (app) {
    app.get('/api/users', (req, res) =>
        usersService.findAllUsers()
            .then(allUsers => res.json(allUsers)))
    app.get('/api/users/:id', (req, res) =>
        usersService.findUserById(req.params['id'])
            .then(user => res.json(user)))
    app.post('/api/users', (req, res) =>
        usersService.createUser(req.body)
            .then(user => res.send(user)))
}