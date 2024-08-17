let express = require("express");
let router = express.Router();
const userOperation = require("../operations/userOperation");

//Login
router.post("/login", (req, res) => {
  console.log("req");
  console.log(req.body);
  if (req.body) {
    userOperation.loginUser(req.body).then((result) => {
      console.log("result in routes for login");
      console.log(result);
      if (result === "User Not Found") {
        res.status(401).json({
          MSG: "User Not Found",
        });
      } else if (result === "User credentials not match") {
        res.status(401).json({
          MSG: "Password Not Matched",
        });
      } else {
        res.status(200).json({
          result: result,
        });
      }
    });
  }
});

//Register
router.post("/register", (req, res) => {
  if (req.body) {
    let userInfo = {
      first_name: req.body.firstName,
      middle_name: req.body.middleName,
      last_name: req.body.lastName,
      user_name: req.body.userName,
      password: req.body.password,
      email: req.body.email,
      role: "candidate",
    };
    userOperation.signUp(userInfo).then((result) => {
      if (result) {
        res.status(200).json({
          Msg: "Successfully signup",
          result: result,
        });
      }
    });
  }
});

//Get User Details
router.get("/profile", (req, res) => {
  let id = req.query._id;
  userOperation.candidateProfile(id).then((result) => {
    if (result) {
      res.status(200).json({
        Msg: "Successfully fetch profile",
        result: result,
      });
    } else {
      res.status(404).json({
        Msg: "profile Not Found",
      });
    }
  });
});

//Update User Details
router.put("/profile/:id", (req, res) => {
  let id = req.params.id;
  userOperation.updateCandidateProfile(id, req.body).then((result) => {
    if (result) {
      res.status(200).json({
        Msg: "Successfully Updated Profile",
        result: result,
      });
    } else {
      res.status(404).json({
        Msg: "profile Not Found",
      });
    }
  });
});

module.exports = router;
