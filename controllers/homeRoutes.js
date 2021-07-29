const router = require("express").Router();
const { AllPosts, User } = require("../models");
const withAuth = require("../utils/auth");

// Homepage displaying all posts
router.get("/", async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await AllPosts.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      posts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Signup page
router.get("/signup", async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

// add link on title name of posts to change url to this **********
// add comment handlebar *****
// when clicking on one post, it is opened and redirected to add comment page
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render("comment", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: AllPosts }],
    });

    const user = userData.get({ plain: true });

    res.render("yourDashboard", {
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/yourDashboard");
    return;
  }

  res.render("login");
});

module.exports = router;
