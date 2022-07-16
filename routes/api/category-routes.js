const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: [
  // be sure to include its associated Products
  include: [
    {
      model: Comment,
      attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
      include: {
}
.then((dbPostData) => {
  const posts = dbPostData.map((post) => post.get({ plain: true }));
  res.render("dashboard", { posts, loggedIn: true });
})
.catch((err) => {
  console.log(err);
  res.status(500).json(err);
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: [
  // be sure to include its associated Products
  include: [
    {
      model: Comment,
      attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
      include: {
})
.then((dbPostData) => {
  const posts = dbPostData.map((post) => post.get({ plain: true }));
  res.render("dashboard", { posts, loggedIn: true });
})
.catch((err) => {
  console.log(err);
  res.status(500).json(err);
});
});

router.post('/', (req, res) => {
  // create a new category
  Post.create({
    title: req.body.title,
    post_url: req.body.post_url,
    user_id: req.session.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "post_url",
      "title",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
        ),
        "vote_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  omment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(404).json({ message: "No comment found with this id!" });
        return;
      }
      res.json(dbCommentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
});

module.exports = router;
