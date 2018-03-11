const mongoose = require('../config/mongoose.js');
const Schema = mongoose.Schema;

const ArticleSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },
  text: {
    type: String
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Article', ArticleSchema);
