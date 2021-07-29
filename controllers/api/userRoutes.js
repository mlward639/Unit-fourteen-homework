const router = require("express").Router();
const { User } = require("../../models");

// POST route to create user
router.post("/", async (req, res) => {
  try {
    // *** make sure the route matches up correctly elsewhere
    const userData = await User.create(req.body);
    // set up session to save user login and keep user logged in
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST route to login
router.post("/login", async (req, res) => {
  try {
    // find user in db that has matching username with the login information entered by user
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    // if user's info does not match any user from the database, give error message
    if (!userData) {
      res.status(400).json({
        message:
          "Unable to login due to incorrect username or password. Try again.",
      });
      return;
    }
    // check if valid password.
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({
        message:
          "Unable to login due to incorrect username or password. Try again.",
      });
      return;
    }
    //if password is valid, save session with user logged in
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: "You are logged in." });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST route to logout
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
