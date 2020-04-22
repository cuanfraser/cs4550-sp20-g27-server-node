const issueModel = require('../models/issue-ticket/issue-ticket.model.server')

const findIssueById = (id) => issueModel.findOne({ _id: id })
const findAllIssues = () => issueModel.find()
const createIssue = (issue) =>
    issueModel.create(issue)
const updateIssue = (id, updateIssue) =>
    issueModel.findOneAndUpdate({ _id: id }, updateIssue)
const deleteIssue = (id) =>
    issueModel.deleteOne({ _id: id })
const findIssuesForRepo = (rid) => issueModel.find({ repository: rid }).populate('repository', 'name _id')

module.exports = { findIssueById, createIssue, findAllIssues, updateIssue, deleteIssue, findIssuesForRepo }