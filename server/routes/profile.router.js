const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


// Get all of the profiles added by the user
router.get('/', rejectUnauthenticated, (req, res) => {
    if (req.isAuthenticated()) {
        console.log('authenticated', req.isAuthenticated());
        const queryText = 'SELECT * FROM "profiles" ORDER BY "name" ASC;';
        pool.query(queryText)
            .then(result => {
                res.send(result.rows);
            }).catch(error => {
                console.log('in profiles get error', error);
            })
    } else {
        res.sendStatus(40);
    }
});

// Add a profile for the logged in user
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log(req.user);
     if (req.isAuthenticated()) {
         const newProfile = req.body;
         const queryText =
         `INSERT INTO "profiles" (image_url, name, date_of_encounter, location, relation, misc, person_id) 
          VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    const queryValues = [
        newProfile.image,
        newProfile.name,
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

// will need to come back to fix put route
// Update a profile if it's something the logged in user wants to update or edit
router.put('/:id', rejectUnauthenticated, (req, res) => {
    if (req.isAuthenticated()) {
    const reqId = req.params.id;
    const profileToUpdate = req.body; // This the data we sent
    const queryText = `UPDATE "profiles" SET image_url = $1, name = $2, date_of_encounter = $3,
                      location = $4, relation = $5, misc = $6
                      WHERE "id" = $7`;
    // const queryText = `UPDATE "profiles" SET (image_url", "name", "date_of_encounter", "location", "relation", 
    // "misc") = ($1, $2, $3, $4, $5, $6) WHERE "id" = $1;`;
    const queryValues = [
        profileToUpdate.image,
        profileToUpdate.name,
        profileToUpdate.date,
        profileToUpdate.location,
        profileToUpdate.relation,
        profileToUpdate.misc,
        reqId
    ];
    pool.query(queryText, queryValues)
        .then((result) => {
            console.log(result);
            res.sendStatus(201);
        }).catch((error) => {
                console.log('in put router update', error);
                res.sendStatus(500)
            })
    } else {
        res.sendStatus(403);
    }
});
    

module.exports = router;