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

        console.log("Notes Contains:", notes);
        fs.readFile('db/db.json', (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data));
        });
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
        newReference = notes.length+1
        myNote.id = String(notes.length+1);

        console.log ("Our ID String:", String(myNote.id));
        // console.log("Total Notes: ", totalNotes);
        notes.push(myNote);
    

        console.log("Notes Starts:");
        console.log(notes);
        console.log("Notes Ends");

        myTestNotes = JSON.stringify(notes);
        console.log("String Notes Starts:");
        console.log(myTestNotes);
        console.log("String Notes Ends:");

        //fs.writeFile('db/db.json', notes);

        fs.writeFile ('db/db.json', JSON.stringify(notes), function (err) {
            if (err) throw err;
            console.log ("File written");
        });

        res.json(true);

    });

    app.delete('/api/notes/:id', (req, res) => {
        // EXS 1st May 2020 - Get our id of the note to delete, if we only have 1 note left, then pop it.
        var idToRemove = req.params.id;
        if (notes.length <= 1) {
            notes.pop();

        } else {
            notes.splice(idToRemove - 1, 1);
            // After we splice then rewrite the notes.id field, look at ES6 arrow function for this
            notes.forEach(updateID);
        }
        function updateID(item, index) {
            console.log(item.id);
            item.id = index + 1;
        }

        res.json(true);
    })



}

