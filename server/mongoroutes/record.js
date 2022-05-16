const express = require("express");
const router = express.Router();
let mongoose = require('mongoose');
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
 
// This will help us connect to the database
let blogpost = require("../mongodb/connections.js");
// This help convert the id from string to ObjectId for the _id.

 
// This section will help you get a list of all the records.
router.route('/record').get((req, res) => {
  blogpost.find((error, data) => {
      if (error) {
          return next(error)
      } else {
          res.json(data)
      }
  })
})
 
// This section will help you get a single record by id
router.route('/record/:id').get((req, res) => {
  blogpost.findById(req.params.id, (error, data) => {
      if (error) {
          return next(error)
      } else {
          res.json(data)
      }
  })});

// This section will help you create a new record.
router.route('/create').post((req, res, next) => {
  blogpost.create(req.body, (error, data) => {
      if (error) {
          return next(error)
      } else {
          console.log(data)
          res.json(data)
      }
  })
});

// This section will help you update a record by id.
router.route('/update/:id').put((req, res, next) => {
  blogpost.findByIdAndUpdate(req.params.id, {
      $set: req.body
  }, (error, data) => {
      if (error) {
          return next(error);
          console.log(error)
      } else {
          res.json(data)
          console.log('User updated successfully !')
      }
  })
})
 
  router.route('/delete/:id').delete((req, res, next) => {
    blogpost.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
module.exports = router;