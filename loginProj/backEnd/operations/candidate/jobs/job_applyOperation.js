let JobAppliedSchema = require("../../../modals/candidate/jobs/job_apply");
let Promise = require("promise");

const applyNewJob = (job) => {
  return new Promise((resolve, reject) => {
    try {
      console.log("job");
      console.log(job);
        let jobApplied = {
          job_title: job.job_title,
          job_type: job.job_type,
          job_timing: job.job_timing,
          job_location: job.job_location,
          job_skills: job.job_skills,
          job_shift: job.job_shift,
          job_short_desc: job.job_short_desc,
          job_long_desc: job.job_long_desc,
        };

      //   console.log("jobApplied");
      //   console.log(jobApplied);
      let jobListSchema = new JobAppliedSchema(jobApplied);
      jobListSchema
        .save()
        .then((result) => {
          if (result) {
            console.log("result after applying new job");
            console.log(result);
            resolve(result);
          } else {
            reject(result);
          }
        })
        .catch((err) => {
          console.log("err after applying new job");
          console.log(err);
          reject(err);
        });
    } catch (error) {
      return error;
    }
  });
};

module.exports = {
  applyNewJob: applyNewJob,
};
