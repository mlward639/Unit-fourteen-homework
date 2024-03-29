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

// Create new post
router.post("/", async (req, res) => {
  try {
    const newPost = await AllPosts.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const postData = await AllPosts.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update one of your posts
router.put("/:id", async (req, res) => {
  try {
    const editedPost = await AllPosts.update(
      {
        ...req.body,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    console.log(editedPost);
    res.status(200).json(editedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// NOT WORKING!!!!
// //add comment to a post
// router.put("/:id", async (req, res) => {
//   console.log(req.body);
//   try {
//     const comment = await AllPosts.update(
//       {
//         comment: req.body.comment,
//       },
//       {
//         where: {
//           id: req.params.id,
//         },
//       }
//     );
//     res.status(200).json(comment);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
