const mongoose = require('mongoose')
const issueTicketSchema = require('./issue-ticket.schema.server')
const issueTicketModel = mongoose.model(
    'IssueTicketModel',
    issueTicketSchema
)
module.exports = issueTicketModel