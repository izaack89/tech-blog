const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll();

    const posts = postData.map((postInfo) =>
    postInfo.get({ plain: true })
    );

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
      homeLink:" active "
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login',{
    loginLink:" active "
  });
});


router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup',{
    loginLink:" active "
  });
});

module.exports = router;
