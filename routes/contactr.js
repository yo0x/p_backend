const express = require("express");
const router = express.Router();
const ContactMo = require("../models/contact");

//Gets all posts
router.get("/", async (req, res) => {
  try {
    const ConFindOb = await ContactMo.find();
    res.json(ConFindOb);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submits a post
router.post("/", async (req, res) => {
  const subContact = new ContactMo({
    name: req.body.name,
    emailAddress: req.body.emailAddress,
    subject: req.body.subject,
    message: req.body.message
  });
  try {
    const savedContact = await subContact.save();
    res.json(savedContact);
  } catch (err) {
    res.json({ message: err });
  }
});
//Specific post
router.get("/:postId", async (req, res) => {
  //console.log(req.params.postId);
  try {
    const contacSpe = await ContactMo.findById(req.params.postId);
    res.json(contacSpe);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete post

router.delete("/:postId", async (req, res) => {
  try {
    const removContact = await ContactMo.remove({ _id: req.params.postId });
  } catch (err) {
    res.json({ message: err });
  }
});

//patch Post
router.patch('/:postId', async (req, res) => {
try {
    const upContact = await ContactMo.updateOne({_id: req.params.postId},
        {$set: {title: req.body.title}}
        );
        res.json(upContact);
} catch (error) {
    res.json({message: err});
}
});

module.exports = router;
