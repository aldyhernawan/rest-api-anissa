const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    personnel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "personnels"
    },
})

module.exports = mongoose.model('User', userSchema)
