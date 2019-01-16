const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');



// Update a profile if it's something the logged in user wants to update or edit
router.put('/:id', rejectUnauthenticated, (req, res) => {
    if (req.isAuthenticated()) {
        console.log('checking for req.body', req.body);
        reqId = req.params.id;
        const profileToUpdate = req.body; // This the data we sent
        const queryText = `UPDATE "profiles" SET "image_url" = $1, "name" = $2, "title" = $3, "date_of_encounter" = $4,
                          "location" = $5, "relation" = $6, "misc" = $7
                           WHERE "id" = $8;`;
        const queryValues = [
            profileToUpdate.image,
            profileToUpdate.name,
            profileToUpdate.title,
            profileToUpdate.date,
            profileToUpdate.location,
            profileToUpdate.relation,
            profileToUpdate.misc,
            reqId
        ];
        pool.query(queryText, queryValues)
            .then((result) => {
                console.log(result);
                res.sendStatus(204);
            }).catch((error) => {
                console.log('in put router update', error);
                res.sendStatus(500)
            })
    } else {
        res.sendStatus(403);
    }
});


module.exports = router;