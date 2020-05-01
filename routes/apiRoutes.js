// apiRoutes 
// This code will route our api calls to the appropriate functions
//
// Eddie Saunders saunders.eddie@outlook.com 30th April 2020

// EXS 1st May 2020 We have to use FS in this section, getting the general flow complete first.

const notes = require('../db/db.json');
const fs = require('fs');

//console.log("Our current path in apiRoutes.js:", __dirname);
//console.log(notes.length);

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        res.json(notes);
    });

    app.post('/api/notes', (req, res) => {

        // EXS 1st May 2020 - Add our id in with the note body
        // We're going to need to do some checking here to ensure that we don't duplicate ID's
        // That code is currently not implemented.
        const myNote = req.body
        totalNotes = notes.length;
        // EXS 1st Mqy 2020 - This is naughty code, as the +1 gives us potential for duplicate IDs
        // What we should do is go through the list and reassign the ID's
        // Of course once the delete function is complete this maybe a moot point as the length and id numbers should tie up.
        myNote.id = notes.length + 1;

        // console.log("Total Notes: ", totalNotes);
        notes.push(myNote);
        res.json(true);
        console.log("Notes Length:", notes.length);
    });

    app.delete('/api/notes/:id', (req, res) => {
        // EXS 1st May 2020 - Get our id of the note to delete, if we only have 1 note left, then pop it.
        var idToRemove = req.params.id;

        if (notes.length <= 1) {
            notes.pop();

        } else {
            notes.splice(idToRemove - 1, 1);
            // After we splice then rewrite the notes.id field
            notes.forEach(updateID);
        }

        function updateID(item, index) {
            console.log(item.id);
            item.id = index + 1;
        }

        res.json(true);
    })



}

