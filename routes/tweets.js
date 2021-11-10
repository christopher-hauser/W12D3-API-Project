const express = require('express');
const db = require("../db/models");
const { Tweet } = db;

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const router = express.Router();

const tweetNotFoundError = (tweetId) => {
  const error = new Error(
    `Tweet number ${tweetId} cannot be found.`,
    // 'title': 'Tweet not found',
    // 'status': 404
  );
  return error;
}

router.get("/", asyncHandler(async(req, res) => {
  const tweets = await Tweet.findAll();
  console.log(tweets)
    res.json({
        tweets
    });
    res.send("Welcome to the express-sequelize-starter!");
  }));

router.get('/:id(\\d+)', asyncHandler(async(req, res, next) => {
  const tweet = await Tweet.findByPk(req.params.id);
  if(tweet) {
    res.json({
      tweet
    });
  } else {
    console.log(tweetNotFoundError())
    next(tweetNotFoundError());
  };
}));
module.exports = router;
