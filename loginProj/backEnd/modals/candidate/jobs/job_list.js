let mongoose = require('mongoose');
let JobSListchema = mongoose.Schema({
    job_title: {
        type: String,
        required: true,
        // unique: true
    },
    job_type: {
        type: String,
        required: true,
    },
    job_timing: {
        type: String,
        required: true,
    },
    job_location: {
        type: String,
        required: true,
    },
    job_skills: {
        type: String,
        required: true,
    },
    job_shift: {
        type: String,
        required: true,
    },
    job_short_desc: {
        type: String,
        required: true,
    },
    job_long_desc: {
        type: String,
        required: true,
    },
});

const jobList = module.exports = mongoose.model('JobList', JobSListchema);