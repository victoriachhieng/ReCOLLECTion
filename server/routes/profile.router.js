const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


// Get all of the profiles added by the user
router.get('/:id', rejectUnauthenticated, (req, res) => {
    if (req.isAuthenticated()) {
        console.log('authenticated', req.isAuthenticated());
        const queryText = `SELECT "profiles"."id", "profiles"."image_url", "profiles"."name", "profiles"."title", "profiles"."date_of_encounter", "profiles"."location", "profiles"."relation", "profiles"."misc", "profiles"."status_id", "status"."type" 
                           FROM "profiles"
                           JOIN "status" 
                           ON "status"."id" = "profiles"."status_id"
                           WHERE "person_id" = $1
                           ORDER BY "profiles"."name" ASC;`;
        pool.query(queryText, [req.user.id])
            .then(result => {
                res.send(result.rows);
            }).catch(error => {
                console.log('in profiles get error', error);
            })
    } else {
        res.sendStatus(400);
    }
});

// Add a profile for the logged in user
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log(req.user);
     if (req.isAuthenticated()) {
         const newProfile = req.body;
         const queryText = `INSERT INTO "profiles" ("image_url", "name", "title", "date_of_encounter", "location", "relation", "misc", "person_id") 
                            VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
        const queryValues = [
        newProfile.image,
        newProfile.name,
        newProfile.title,
        newProfile.date,
        newProfile.location,
        newProfile.relation,
        newProfile.misc,
        req.user.id
    ];
         pool.query(queryText, queryValues).then(result => {
             res.sendStatus(204);
         }).catch(error => {
             console.log('in profile router post', error);
             res.sendStatus(500)
         })
      } else {
          res.sendStatus(403)
      }
 });

 // Delete a profile if it's something the logged in user deleted
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    if (req.isAuthenticated()) {
    const reqId = req.params.id;
    console.log('route id: ', reqId);
    const queryText = `DELETE FROM "profiles" WHERE id=$1`;
    pool.query(queryText, [reqId])
        .then(result => {
            res.sendStatus(204);
        }).catch(error => {
            console.log('in profile router delete', error);
            res.sendStatus(500);
            })
    } else {
     res.sendStatus(403);
     } 
 });

module.exports = router;