const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment:req.body.comments,
      post_id:req.body.postId,
      user_id:req.session.user_id ,
    });
    res.status(200).json(commentData);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});


module.exports = router;
