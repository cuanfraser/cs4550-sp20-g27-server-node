const mongoose = require('mongoose')
const issueTicketSchema = mongoose.Schema({
    title: { type: String, required: true, default: 'New Ticket' },
    repository: { type: mongoose.Schema.Types.ObjectId, ref: 'RepositoryModel' },
    dateOpened: { type: Date, required: true },
    priority: { type: String, enum: ['HIGH', 'MEDIUM', 'LOW'] },
    description: { type: String },
    resolved: { type: Boolean, default: false }
}, { collection: 'issueTickets' })
module.exports = issueTicketSchema