let JobListSchema = require("../../../modals/candidate/jobs/job_list");
let Promise = require("promise");

const createNewJob = (job) => {
  return new Promise((resolve, reject) => {
    try {
      let jobListSchema = new JobListSchema(job);
      jobListSchema
        .save()
        .then((result) => {
          if (result) {
            resolve(result);
          } else {
            reject(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      return error;
    }
  });
};

const getAllJobs = () => {
  return new Promise((resolve, reject) => {
    try {
      JobListSchema.find()
        .exec()
        .then((result) => {
          if (result) {
            resolve(result);
          } else {
            reject(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      return error;
    }
  });
};

const getOneJob = (id) => {
  return new Promise((resolve, reject) => {
    try {
      JobListSchema.find({ _id: id })
        .exec()
        .then((result) => {
          if (result) {
            resolve(result);
          } else {
            reject(result);
          }
        });
    } catch (error) {
      return error;
    }
  });
};

module.exports = {
  createNewJob: createNewJob,
  getAllJobs: getAllJobs,
  getOneJob: getOneJob
};
