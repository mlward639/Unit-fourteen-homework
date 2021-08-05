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
router.get("/:id", withAuth, async (req, res) => {
  try {
    const postData = await AllPosts.findByPk(req.params.id, {
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

// get dashboard
//HOW TO GET THE USERS ONLY POSTS TO SHOW UP HERE!!!!
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: AllPosts }],
    });

    const user = await userData.get({ plain: true });
    //console.log("HERE", userData);
    res.render("dashboard", {
      user,
      logged_in: true,
    });
    // console.log("**********", user);
    // console.log("!!!!!!!!", req.session.user_id);
    //console.log("~~~~~~", user);
    //console.log("??????", allposts.title);
  } catch (err) {
    res.status(500).json(err);
  }
});

// specific post on dashboard (use when click on a post and open page to edit it)
router.get("/dashboard/:id", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const postData = await AllPosts.findOne({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    const post = await postData.get({ plain: true });
    if (!postData) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }
    res.render("yourDashboardUpdate", {
      post,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get the your dashboard add page
router.get("/yourDashboardAdd", withAuth, async (req, res) => {
  try {
    res.render("yourDashboardAdd", {
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

module.exports = router;
