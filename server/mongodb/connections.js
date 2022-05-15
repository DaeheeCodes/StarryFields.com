const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let blogSchema = new Schema({
    postnumber: {
        type: String
    },
    title: {
        type: String
    },
    avatar: {
      type: String
  },
  date: {
      type: String
  },
  photo: {
    type: String
},
content: {
    type: String
},
outsidelink: {
  type: String
}
}, {
        collection: 'blogpost'
    })
module.exports = mongoose.model('blogpost', blogSchema)

