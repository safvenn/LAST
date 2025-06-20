const express = require('express');
const router = express.Router();
const Post = require('./model.js');

// GET all posts
router.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
});

// DELETE post
router.delete('/:id', async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post deleted' });
});

// UPDATE post
router.put('/:id', async (req, res) => {
  const { title, image, category } = req.body;
  const post = await Post.findByIdAndUpdate(req.params.id, { title, image, category }, { new: true });
  res.json(post);
});

module.exports = router;
