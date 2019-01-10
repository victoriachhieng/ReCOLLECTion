const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const { rejectUnauthenticated } = require("../modules/authentication-middleware");

router.get("/", rejectUnauthenticated, (req, res) => {
  if (req.isAuthenticated()) {
    console.log("authenticated", req.isAuthenticated());
    const queryText = `SELECT "profiles"."id", "profiles"."image_url", "profiles"."name", "profiles"."date_of_encounter", "profiles"."location", "profiles"."relation", "profiles"."misc", "profiles"."status_id", "status"."type" 
        FROM "profiles"
        LEFT OUTER JOIN "status" 
        ON "status"."id" = "profiles"."status_id"
        ORDER BY "profiles"."name" ASC;`;
    pool.query(queryText).then(result => {
        res.send(result.rows);
      })
      .catch(error => {
        console.log("in profile router post", error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

// Update status of the logged in user
router.put("/:id", rejectUnauthenticated, (req, res) => {
  if (req.isAuthenticated()) {
    const reqId = req.params.id;
    const statusToUpdate = req.body.type; // This the data we sent
    const queryText = `UPDATE "profiles" SET "status_id" = $1
                       WHERE "id" = $2;`;
    const queryValues = [statusToUpdate, reqId];
    pool.query(queryText, queryValues).then(result => {
        console.log(result);
        res.sendStatus(201);
      })
      .catch(error => {
        console.log("in put router update", error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
