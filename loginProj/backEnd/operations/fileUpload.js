let uploadSchema = require("../modals/fileUpload");
let Promise = require("promise");

let getAllFiles = () => {
  return new Promise((resolve, reject) => {
    uploadFile
      .find()
      .exec()
      .limit(20)
      .then((result) => {
        console.log("result");
        console.log(result);
        if (result.length > 0) {
          resolve(result);
        } else {
          reject("Error in fetching data");
        }
      })
      .catch((err) => {
        console.log("err");
        console.log(err);
      });
  });
};

let getSelectedFile = () => {};

let uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    if (file) {
      let UploadSchema = new uploadSchema(file);
      UploadSchema.save()
        .then((result) => {
          if (result) {
            resolve(result);
          } else {
            reject("Error in uploading the file");
          }
        })
        .catch((err) => {
          console.log("Error in uploading the file");
          console.log(err);
        });
    }
  });
};

let updateFile = () => {};

let deleteFile = () => {};

module.exports = {
  getAllFiles: getAllFiles,
  getSelectedFile: getSelectedFile,
  uploadFile: uploadFile,
  updateFile: updateFile,
  deleteFile: deleteFile,
};
