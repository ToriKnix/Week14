const express = require('express');
const router = express.Router();
const { BlogPost, User, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const blogPosts = await BlogPost.findAll({ include: { model: User, attributes: ['username'] } });
    res.render('homepage', { blogPosts, isLoggedIn: req.session.isLoggedIn });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const blogPost = await BlogPost.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ['username'] },
        { model: Comment, include: { model: User, attributes: ['username'] } },
      ],
    });
    res.render('blogpost', { ...blogPost.toJSON(), isLoggedIn: req.session.isLoggedIn });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
