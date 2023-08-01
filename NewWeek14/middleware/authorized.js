const { BlogPost, Comment } = require('../models');

const isAuthorized = async (req, res, next) => {
  try {
    if (!req.session.isLoggedIn) {
      return res.redirect('/login');
    }

    const { postId, commentId } = req.params;
    const userId = req.session.userId;

    if (postId) {
      const blogPost = await BlogPost.findByPk(postId);
      if (!blogPost || blogPost.user_id !== userId) {
        return res.status(403).json({ error: 'Forbidden' });
      }
    }

    if (commentId) {
      const comment = await Comment.findByPk(commentId);
      if (!comment || comment.user_id !== userId) {
        return res.status(403).json({ error: 'Forbidden' });
      }
    }

    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = isAuthorized;
