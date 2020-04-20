const adminsService = require('../services/admins.service.server')
module.exports = function (app) {
    app.get('/api/admins', (req, res) =>
        adminsService.findAlladmins()
            .then(alladmins => res.json(alladmins)))
    app.get('/api/admins/:id', (req, res) =>
        adminsService.findAdminById(req.params['id'])
            .then(admin => res.json(admin)))
    app.post('/api/admins', (req, res) =>
        adminsService.createAdmin(req.body)
            .then(admin => res.send(admin)))
}