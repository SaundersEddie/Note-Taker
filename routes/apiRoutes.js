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
        console.log("Req Body:", req.body);

        const myNote = req.body
        totalNotes = notes.length;
        myNote.id = notes.length+1;
        console.log("Total Notes: ",totalNotes);
        notes.push(myNote);
        res.json(true);
        console.log("Notes Length:", notes.length);
    });

    app.delete('/api/notes/:id', (req, res) => {
        var testShit = req.params.id;
        console.log("Test Shit:", testShit);
        notes.splice (testShit-1,1);
        res.json(notes);
    })
}