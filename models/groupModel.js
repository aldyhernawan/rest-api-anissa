const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    code: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    project_id: {
        required: true,
        type: String
    },
    minimum_personnel: {
        required: false,
        type: String
    },
    description: {
        required: false,
        type: String
    },
    attendance_qr_code: {
        required: true,
        type: Date
    },
    status: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Group', dataSchema)