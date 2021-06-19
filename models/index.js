const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


User.belongsToMany(Post, {
    // With this code I can define the foreign keys (this is another way to do it https://sequelize.org/master/manual/advanced-many-to-many.html)
    through: {
      model: Comment,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'user_comments'
  });
  
  
  Post.belongsToMany(User, {
    // With this code I can define the foreign keys (this is another way to do it https://sequelize.org/master/manual/advanced-many-to-many.html)
    through: {
      model: Comment,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'post_comments'
  });

module.exports = { User,Post,Comment };
