// apiRoutes 
// This code will route our api calls to the appropriate functions
//
// Eddie Saunders saunders.eddie@outlook.com 30th April 2020
//

const notes = require('../db/db.json');
// const path = require('path');
console.log("Our current path in apiRoutes.js:", __dirname);
console.log(notes.length);

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        //console.log(__dirname);
        //console.log(__filename);
        res.json(notes);
    });

    app.post('/api/notes', (req, res) => {

        // EXS 1st May 2020 - Add our id in with the note body
        // We're going to need to do some checking here to ensure that we don't duplicate ID's
        // That code is currently not implemented.

        // console.log("Req Body:", req.body);

        const myNote = req.body
        totalNotes = notes.length;
        // EXS 1st Mqy 2020 - This is naughty code, as the +1 gives us potential for duplicate IDs
        myNote.id = notes.length + 1;
        
        console.log("Total Notes: ", totalNotes);
        notes.push(myNote);
        res.json(true);
        console.log("Notes Length:", notes.length);
    });

    app.delete('/api/notes/:id', (req, res) => {
        // EXS 1st May 2020 - Get our id of the note to delete, if we only have 1 note left, then pop it.
        var idToRemove = req.params.id;

        if (notes.length <= 1) {
            console.log("Only 1 note let to delete")
            notes.pop();

        } else {
            notes.splice(idToRemove - 1, 1);
        }
        res.json(true);
    })
}