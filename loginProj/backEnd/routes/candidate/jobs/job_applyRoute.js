let express = require("express");
let router = express.Router();
let validateUser = require("../../../middlewares/check-auth");

let jobApplyOperation = require("../../../operations/candidate/jobs/job_applyOperation");

router.post("/newJob", validateUser, (req, res) => {
  jobApplyOperation
    .applyNewJob(req.body)
    .then((result) => {
      if (result) {
        res.status(200).json({
          Msg: "Successfully applied new job",
          result: result,
        });
      } else {
        res.status(404).json({
          Msg: "Error in applying new job",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        Msg: "Error in applying new job",
        Error: err,
      });
    });
});

module.exports = router;
