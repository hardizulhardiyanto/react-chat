const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  name: {
    type: String
  },
  message: {
    type: String
  },
  dateTime: {
    type: String
  },
});

module.exports = mongoose.model('Chat', chatSchema);
