const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "test tweets index"
    });
    res.send("Welcome to the express-sequelize-starter!");
  });


module.exports = router;
