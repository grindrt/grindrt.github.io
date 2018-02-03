const mongoose = require('../dal/mongoose.js');

const ArticleSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },
  description:{
    type: String
  },
  author:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Article', ArticleSchema);
