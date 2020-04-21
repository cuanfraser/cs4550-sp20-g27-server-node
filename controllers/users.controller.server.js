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

    app.post('/api/users/register', (req, res) =>
        usersService.createUser(req.body)
            .then(user => {
                req.session['profile'] = user
                user.password = '****'
                res.send(user)
            }))

    app.post('/api/users/profile', (req, res) => {
        if (req.session['profile']) {
            res.send(req.session['profile'])
        }
        else {
            res.sendStatus(401)
        }
    })
        

    app.post('/api/users/logout', (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    })

    app.post('/api/users/login', (req, res) => {
        usersService.findUserByCredentials(req.body.username, req.body.password)
            .then(user => {
                if (user) {
                    req.session['profile'] = user
                    user.password = '****'
                    res.send(user)
                } else {
                    res.status(403).send({
                        message: `User ${req.body.username} not found`
                    })
                }
            })
    })
}