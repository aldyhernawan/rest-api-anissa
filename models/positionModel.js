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
    description: {
        required: true,
        type: String
    },
    status: {
        required: false,
        type: String
    },
    created_by_user_id: {
        required: false,
        type: String
    },
    created_at: {
        required: true,
        type: Date
    },
    updated_by_user_id: {
        required: true,
        type: String
    },
    updated_at: {
        required: true,
        type: String
    },
    deleted_by_user_id: {
        required: true,
        type: String
    },
    deleted_at: {
        required: true,
        type: Date
    }
})

module.exports = mongoose.model('Position', dataSchema)