const express = require("express");
const path = require('path');
const sendGridMail = require('@sendgrid/mail');
const sendGridTransport = require('nodemailer-sendgrid-transport');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
require("dotenv").config({ path: "./config.env" });
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
const blogRoute = require('./mongoroutes/record.js')

mongoose
  .connect('mongodb+srv://readonly:readonly@cluster0.6wqee.mongodb.net/devnotes?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })


  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
      extended: true
  }));

app.use('/blogpost', blogRoute)

app.use(cors('*'))

const PORT = process.env.PORT || 3001;

//app.use(cors(corsOptions));
//parse option for mailer and mongo
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle /api requests to /api route
app.get("/api", (req, res) => { 
  res.json({ message: "Hello from server!" });
});

// All other requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});



//nodemailer with sendgrid

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')
console.log(process.env.SENDGRID_API_KEY)
   
   app.post("/send", function (req, res) {
    let mailOptions = {
      from: `admin@starryfields.com`,
      to: 'daeheeCodes@gmail.com',
      subject: `Message from: ${req.body.mailState.email}`,
      text: `${req.body.mailState.message}`,
      html: `${req.body.mailState.message}`,
    }
    sgMail.send(mailOptions)
      .then(() => {
          console.log("Message Sent");
          res.json({
            status: "success",
          })})
      .catch ((error) => {
        console.error(error)
        res.json({
          status: "fail",
        })
      })
    })


    
const server = app.listen(PORT, () => {
      console.log('Connected to port ' + PORT)
  })
  // Error Handling
  app.use((req, res, next) => {
      next(createError(404));
  });
  app.use(function (err, req, res, next) {
      console.error(err.message);
      if (!err.statusCode) err.statusCode = 500;
      res.status(err.statusCode).send(err.message);
  });

  //mongodb connection support

/*
  var corsOptions = {
    origin: "http://localhost:3001",
    origin: "http://localhost:3000",
    origin: "http://localhost:3001/*",
    origin: "http://localhost:3000/*",
    origin: "*",
    origin: "https://starryfields.com/",
  };
  */