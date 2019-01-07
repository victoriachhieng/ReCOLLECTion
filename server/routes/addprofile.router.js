const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


// Get all of the profiles added by the user
router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('authenticated', req.isAuthenticated());
        let queryText = 'SELECT * FROM "profiles";';
        pool.query(queryText)
            .then(result => {
                res.send(result.rows);
            }).catch(error => {
                console.log('in addprofiles get error', error);
            })
    } else {
        res.sendStatus(40);
    }
});

// Add a profile for the logged in user
router.post('/', (req, res) => {
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
             console.log('in addprofile router post', error);
             res.sendStatus(500)
         })
      } else {
          res.sendStatus(403)
      }
 });


// Delete a profile if it's something the logged in user deleted
// router.delete('/:id', rejectUnauthenticated, (req, res) => {
//     if(req.isAuthenticated()){
//     let id = req.params.id;
//     const queryString = 'DELETE FROM "profiles" WHERE "id" = $1;';
//     pool.query(queryString, [id])
//         .then(result => {
//             res.sendStatus(204)
//         }).catch(error => {
//             console.log('in addprofile router delete', error);
//             res.sendStatus(500)
//         })
//     } else {
//     res.sendStatus(403);
//     } 
// });


// Update a profile if it's something the logged in user wants to update or edit
// router.put('/:id', rejectUnauthenticated, (req, res) => {
//         if (req.isAuthenticated()) {
//             let id = req.params.id;
//             const queryString = 'UPDATE FROM "profiles" WHERE "id" = $1;';
//             pool.query(queryString, [id])
//                 .then(result => {
//                     res.sendStatus(204)
//                 }).catch(error => {
//                     console.log('in addprofile router update', error);
//                     res.sendStatus(500)
//                 })
//         } else {
//             res.sendStatus(403);
//         }
//     });
    


module.exports = router;