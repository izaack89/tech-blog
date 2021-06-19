const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const userData = await Post.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });
module.exports = router;
