let express = require('express');
let uploadOperation = require('../operations/fileUpload');
let router = express.Router();

router.get('/getAllUploads', (req, res) => {
    console.log('Inside all upload doc API')
    uploadOperation.getAllFiles().then((result) => {
        if(result){
            res.status(200).json({
                Msg: 'Received all records',
                records: result
            })
        } else {
            res.status(400).json({
                Msg: 'Error in Receiving records',
            })
        }
    }).catch((err) => {
        if(err){
            console.log(err);
        }
    });
})

router.get('/getSelectedUpload:/id', (req, res) => {
    console.log('Inside sleccted upload API')
    let id = req.query;
    uploadOperation.getSelectedFile(id).then((result) => {
        if(result){
            res.status(200).json({
                Msg: 'Received all records',
                records: result
            })
        } else {
            res.status(400).json({
                Msg: 'Error in Receiving records',
            })
        }
    }).catch((err) => {
        if(err){
            console.log(err);
        }
    });
})


router.post('/Upload', (req, res) => {
    console.log('Inside upload API')
    uploadOperation.uploadFile(req.body).then((result) => {
        if(result){
            res.status(200).json({
                Msg: 'Successfully upload the file',
                records: result
            })
        } else {
            res.status(400).json({
                Msg: 'Error in uploading record',
            })
        }
    }).catch((err) => {
        if(err){
            console.log(err);
        }
    });
})

router.put('/updateUpload', (req, res) => {
    console.log('Inside update API')
    uploadOperation.updateFile(req.body).then((result) => {
        if(result){
            res.status(200).json({
                Msg: 'Successfully update the record',
                records: result
            })
        } else {
            res.status(400).json({
                Msg: 'Error in updating record',
            })
        }
    }).catch((err) => {
        if(err){
            console.log(err);
        }
    });
})

router.delete('/deleteUpload', (req, res) => {
    let id = req.query.id;
    console.log('Inside deleteUpload API')
    uploadOperation.deleteFile().then((result) => {
        if(result){
            res.status(200).json({
                Msg: 'Successfully deleted the record',
                records: result
            })
        } else {
            res.status(400).json({
                Msg: 'Error in deleting record',
            })
        }
    }).catch((err) => {
        if(err){
            console.log(err);
        }
    });
})

module.exports = router;