require('dotenv').config();
const path = require('path');
const sgMail = require('@sendgrid/mail');
const express = require('express')
const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => { console.log(`Listening on port 3000`); });