let express = require("express");
let router = express.Router();
let validateUser = require('../../../middlewares/check-auth');

let jobListOperation = require("../../../operations/candidate/jobs/job_listOperation");

router.get("/list",validateUser, (req, res) => {
  jobListOperation
    .getAllJobs()
    .then((result) => {
      if (result) {
        res.status(200).json({
          Msg: "Successfully fetch all the jobs",
          result: result,
        });
      } else {
        res.status(404).json({
          Msg: "Error in fetching the job list",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        Msg: "Error in fetching the job list",
        Error: err,
      });
    });
});


router.post("/create", validateUser,  (req, res) => {
  jobListOperation
    .createNewJob(req.body)
    .then((result) => {
      if (result) {
        res.status(200).json({
          Msg: "Successfully save new job",
          result: result,
        });
      } else {
        res.status(404).json({
          Msg: "Error in saving new job",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        Msg: "Error in saving new job",
        Error: err,
      });
    });
});

router.get('/oneJob/:id', validateUser, (req, res) => {
  let id = req.params.id;
  console.log('req.query')
  console.log(req.query)
  console.log('req.params')
  console.log(req.params)
  jobListOperation.getOneJob(id).then((result) => {
    if(result){
      res.status(200).json({
        MSG: 'Successfully fetch the record',
        result: result
      })
    } else {
      res.status(400).json({
        MSG: 'Error in fetchig the record',
        Error: result
      })
    }
  }).catch((err) => {
    res.status(400).json({
      MSG: 'Error in fetchig the record',
      Error: err
    })
  })
})

module.exports = router;