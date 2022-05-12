const express = require("express");
const path = require('path');
require('dotenv').config()
const sendGridMail = require('@sendgrid/mail');
const sendGridTransport = require('nodemailer-sendgrid-transport');
const nodemailer = require('nodemailer');
const cors = require('cors');
const db = require("./mongo/models");
const app = express();

var corsOptions = {
  origin: "http://localhost:3001",
  origin: "http://localhost:3000"
};

const PORT = process.env.PORT || 3001;

app.use(cors(corsOptions));
//parse option for mailer and mongo
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


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



const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
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

   app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });


