const issueDaos = require('../daos/issue-ticket.daos.server')
module.exports = function (app) {
    app.get('/api/issues', (req, res) =>
        issueDaos.findAllIssues()
            .then(issues => res.json(issues)))
    app.get('/api/issues/:id', (req, res) =>
        issueDaos.findIssueById(req.params['id'])
            .then(issue => res.json(issue)))
    app.post('/api/issues', (req, res) =>
        issueDaos.createIssue(req.body)
            .then(issue => res.json(issue)))
    app.put('/api/issues/:id', (req, res) =>
        issueDaos.updateIssue(req.params['id'], req.body)
            .then(issue => res.json(issue)))
    app.delete('/api/issues/:id', (req, res) =>
        issueDaos.deleteIssue(req.params['id'])
            .then(resp => res.json(resp)))
    app.get('/api/repos/:rid/issues', (req,res) =>
        issueDaos.findIssuesForRepo(req.params['id'])
            .then(resp => res.json(resp)))
}