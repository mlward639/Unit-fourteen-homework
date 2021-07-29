const router = require("express").Router();
const { AllPosts, User } = require("../../models");
const withAuth = require("../../utils/auth");

// Add comment to a post
router.put("/post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.update(
      {
        comment: req.body.comment,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.render("homepage", {
      ...postData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
