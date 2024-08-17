let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let uploadSchema = Schema({
    fileName: {
        type: String,
        required: false
    },

    fileType: {
        type: String,
        required: false
    },

    fileSize: {
        type: String,
        required: false
    },

    isTrue: {
        type: Boolean,
        required: true
    }
});

let upload = module.exports = mongoose.model('upload', uploadSchema);