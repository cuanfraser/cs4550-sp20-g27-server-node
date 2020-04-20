const mongoose = require('mongoose')
const repositorySchema = mongoose.Schema({
    name: String,
    url: String,
    description: String,
    issueTickets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'IssueTicketModel'
    }]
}, { collection: 'repositories' })
module.exports = repositorySchema