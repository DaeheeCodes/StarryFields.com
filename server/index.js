const express = require("express");
const path = require('path');
require('dotenv').config()
const sendGridMail = require('@sendgrid/mail');
const sendGridTransport = require('nodemailer-sendgrid-transport');
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);
const nodemailer = require('nodemailer');
const cors = require('cors');

app.use(cors({
  origin: '*'
}));

const PORT = process.env.PORT || 3001;

const app = express();

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

const transporter = nodemailer.createTransport(sendGridTransport({
  auth:{
  api_key: `${(process.env.SENDGRID_API_KEY)}`
  }
  }));

  app.post('/send', (req, res) => {
    const { name, email, message, subject } = req.body
    transporter.sendMail({
      to: 'admin@starryfields.com',
      from: email,
      subject: subject,
      html: `<h5>${name}</h5>
      <p>${message}</p>` })
      .then (resp => {
        res.json({resp})
      })
      .cath(err => {
        console.log(err)
      })
    });