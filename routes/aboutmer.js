const express = require("express");
const router = express.Router();
const AboutmeMo = require("../models/about-me");

//Gets all posts
router.get("/", async (req, res) => {
  try {
    const aboutmeOb = await AboutmeMo.find();
    res.json(aboutmeOb);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submits a post
router.post("/", async (req, res) => {
  const postAboutMe = new AboutmeMo({
    title: req.body.title,
    description: req.body.description,
    contAbout:req.body.contContact
  });
  try {
    const savedAboutme = await postAboutMe.save();
    res.json(savedAboutme);
  } catch (err) {
    res.json({ message: err });
  }
});
//Specific post
router.get("/:postId", async (req, res) => {
  //console.log(req.params.postId);
  try {
    const aboutMeSpe = await AboutmeMo.findById(req.params.postId);
    res.json(aboutMeSpe);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete post

router.delete("/:postId", async (req, res) => {
  try {
    const removeAbout = await AboutmeMo.remove({ _id: req.params.postId });
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;

//patch Post
router.patch('/:postId', async (req, res) => {
try {
    const updatedAbout = await AboutmeMo.updateOne({_id: req.params.postId},
        {$set: {title: req.body.title}}
        );
        res.json(updatedAbout);
} catch (error) {
    res.json({message: err});
}
});