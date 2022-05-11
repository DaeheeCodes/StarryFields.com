const express = require("express");
const path = require('path');
require('dotenv').config()
const sendGridMail = require('@sendgrid/mail');
const sendGridTransport = require('nodemailer-sendgrid-transport');
const nodemailer = require('nodemailer');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors({
  origin: '*'
}));

app.use(express.json())

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//we use setAPIKey already at the top but below is needed to run the transport module
let transporter = nodemailer.createTransport(sendGridTransport({
  auth:{
  api_key: `${process.env.SENDGRID_API_KEY}`
  }
  }));

   transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
   });
   
   app.post("/send", function (req, res) {
    let mailOptions = {
      from: `${req.body.mailState.email}`,
      to: process.env.EMAIL,
      subject: `Message from: ${req.body.mailState.email}`,
      text: `${req.body.mailState.message}`,
    };
   
    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        res.json({
          status: "fail",
        });
      } else {
        console.log("== Message Sent ==");
        res.json({
          status: "success",
        });
      }
    });
   });