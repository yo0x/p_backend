const express = require("express");
const router = express.Router();
const GoalsMo = require("../models/goals");

//Gets all posts
router.get("/", async (req, res) => {
  try {
    const goalsOb = await GoalsMo.find();
    res.json(goalsOb);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submits a post
router.post("/", async (req, res) => {
  const postGoal = new GoalsMo({
    title: req.body.title,
    description: req.body.description,
    done: req.body.done,
    collapse_id: req.body.collapse_id
  });
  try {
    const savedGoal = await postGoal.save();
    res.json(savedGoal);
  } catch (err) {
    res.json({ message: err });
  }
});
//Specific post
router.get("/:postId", async (req, res) => {
  //console.log(req.params.postId);
  try {
    const postGoal = await GoalsMo.findById(req.params.postId);
    res.json(postGoal);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete post

router.delete("/:postId", async (req, res) => {
  try {
    const rmGaol = await GoalsMo.remove({ _id: req.params.postId });
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;

//patch Post
router.patch('/:postId', async (req, res) => {
try {
    const upGoal = await GoalsMo.updateOne({_id: req.params.postId},
        {$set: {title: req.body.title}}
        );
        res.json(upGoal);
} catch (error) {
    res.json({message: err});
}
});