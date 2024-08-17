let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");
let morgan = require("morgan");
let mongoose = require("mongoose");

let app = express();


let config = require('./config/config');
let uploadRoute = require('./routes/fileUpload');
let UserRoute = require('./routes/userRoute');
let jobList = require('./routes/candidate/jobs/job_listRoute');
let applyJob = require('./routes/candidate/jobs/job_applyRoute');


app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use()



app.use('/api', uploadRoute);
app.use('/api/user', UserRoute);
app.use('/api/job', jobList);
app.use('/api/apply', applyJob);


app.use((data, req, res, next) => {
    const error = new Error(data);
    error.status = 404;
    next(error);
});

app.listen(config.port, (err) => {
    if(err){
        console.log('error occur in starting the server');
    } else {
        console.log(`Server started at port ${config.port}`);
    }
});

mongoose.connect(config.database);
mongoose.connection.on('connected', (err) =>{
    if(err){
        console.log('Error in connecting database');
    } else {
        console.log('Connected to database at port 27017');
    }
});
