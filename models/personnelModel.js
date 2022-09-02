const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personnelSchema = new mongoose.Schema({
    code: {
        required: true,
        type: String
    },
    photo_url: {
        required: true,
        type: String
    },
    first_name: {
        required: true,
        type: String
    },
    middle_name: {
        required: false,
        type: String
    },
    last_name: {
        required: false,
        type: String
    },
    complete_name: {
        required: true,
        type: String
    },
    gender: {
        required: true,
        type: String
    },
    height: {
        required: true,
        type: String
    },
    weight: {
        required: true,
        type: String
    },
    dob: {
        required: true,
        type: Date
    },
    pob: {
        required: true,
        type: String
    },
    hp: {
        required: true,
        type: String
    },
    address: {
        required: true,
        type: String
    },
    firebase_token: {
        required: true,
        type: String
    },
    device_id: {
        required: true,
        type: String
    },
    position: {
        required: true,
        type: Schema.Types.ObjectId, ref: 'Position'
    },
    group: {
        required: true,
        type: Schema.Types.ObjectId, ref: 'Group'
    },
})

module.exports = mongoose.model('Personnel', personnelSchema)