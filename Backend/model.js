const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String },
  category: { type: String },
  image: { type: String },
});

module.exports = mongoose.model('Post', PostSchema);
