const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {rejectUnauthenticated} = require("../modules/authentication-middleware");

// Get all of the profiles added by the user
router.get("/", rejectUnauthenticated, (req, res) => {
  if (req.isAuthenticated()) {
    console.log("authenticated", req.isAuthenticated());
      const queryText = `SELECT * FROM "profiles"
                         WHERE "status_id" = 1 ;`;
    pool.query(queryText).then(result => {
        res.send(result.rows);
      })
      .catch(error => {
        console.log("in favorites get error", error);
      });
  } else {
    res.sendStatus(40);
  }
});

module.exports = router;