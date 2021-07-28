// If user is logged in, go to the next step. If user is not logged in, redirect to the login route
const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
