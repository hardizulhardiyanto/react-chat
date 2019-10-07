const mongoose = require('mongoose')
mongoose.set('useFindmAndModify', false);
mongoose.connect('mongodb://localhost/reactchat', {
  useCreateIndex: true,
  useNewUrlParser: true
});