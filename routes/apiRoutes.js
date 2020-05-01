// apiRoutes 
// This code will route our api calls to the appropriate functions
//
// Eddie Saunders saunders.eddie@outlook.com 30th April 2020
// EXS 1st May 2020 We have to use FS in this section, getting the general flow complete first.
const notes = require('../db/db.json');
const fs = require('fs');
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
        const myNote = req.body
        totalNotes = notes.length;
        myNote.id = String(notes.length+1);
        notes.push(myNote);
        writeJSONFile(notes);
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
        writeJSONFile(notes);
        res.json(true);
    })

    function writeJSONFile (notes) {
        fs.writeFile ('db/db.json', JSON.stringify(notes), function (err) {
            if (err) throw err;
            console.log ("File written");
        });
    }
}