let UserSchema = require("../modals/userSchema");
let Promise = require("promise");
let Bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let config = require("../config/config");

let loginUser = (userDetails) => {
  return new Promise((resolve, reject) => {
    UserSchema.findOne({ user_name: userDetails.userName }).then((user) => {
      if (!user) {
        return resolve("User Not Found");
      }
      Bcrypt.compare(userDetails.password, user.password)
        .then((result) => {
          if (!result) {
            resolve("User credentials not match");
          }
          const token = jwt.sign(
            { userName: user.user_name, userId: user._id },
            config.secret,
            {
              expiresIn: "1h",
            }
          );
          let userResponse = {
            token: token,
            userName: user.user_name,
            email: user.email,
            userId: user._id,
            role: user.role,
          };
          resolve(userResponse);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

//Register new user
let signUp = (userDetails) => {
  return new Promise((resolve, reject) => {
    if (userDetails) {
      Bcrypt.hash(userDetails.password, 10).then((hash) => {
        userDetails.password = hash;
        let userSchema = new UserSchema(userDetails);
        userSchema
          .save()
          .then((result) => {
            if (result) {
              const token = jwt.sign(
                { userName: result.user_name, userId: result._id },
                "JAY_SIYA_RAM",
                {
                  expiresIn: "1h",
                }
              );
              let userResponse = {
                token: token,
                userName: result.user_name,
                email: result.email,
                userId: result._id,
                role: result.role,
              };
              resolve(userResponse);
            } else {
              reject("Error in creating new user");
            }
          })
          .catch((err) => {
            console.log("Error in creating new user", err);
          });
      });
    } else {
      reject("Error in creating new user");
    }
  });
};

const candidateProfile = (id) => {
  return new Promise((resolve, reject) => {
    UserSchema.findOne({ _id: id })
      .exec()
      .then((result) => {
        if (result) {
          const userDetails = {
            firstName: result.first_name,
            middleName: result.middle_name,
            lastName: result.last_name,
            userName: result.user_name,
            contact: result.contact,
            email: result.email,
            dateOfBirth: result.date_of_birth,
          };
          resolve(userDetails);
        } else {
          reject(result);
        }
      })
      .catch((err) => {
        return err;
      });
  });
};

const updateCandidateProfile = (id, userDetail) => {
  return new Promise((resolve, reject) => {
    UserSchema.findByIdAndUpdate(
      id,
      { $set: userDetail },
      { upsert: true, new: true }
    )
      .exec()
      .then((result) => {
        if (result) {
          const userDetails = {
            firstName: result.first_name,
            middleName: result.middle_name,
            lastName: result.last_name,
            userName: result.user_name,
            contact: result.contact,
            dateOfBirth: result.date_of_birth,
            email: result.email,
          };
          resolve(userDetails);
        } else {
          reject(result);
        }
      })
      .catch((err) => {
        return err;
      });
  });
};

module.exports = {
  signUp: signUp,
  loginUser: loginUser,
  candidateProfile: candidateProfile,
  updateCandidateProfile: updateCandidateProfile
};
