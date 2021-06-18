//  Added the file that will help us to check if the user is logged 
const withAuth = (req, res, next) => {  
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
