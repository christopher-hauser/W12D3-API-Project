const express = require('express');
const db = require("../db/models");
const { Tweet } = db;

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const router = express.Router();

router.get("/", asyncHandler(async(req, res) => {
  const tweets = Tweet.findAll();
    res.json({
        tweets
    });
    res.send("Welcome to the express-sequelize-starter!");
  }));


module.exports = router;
