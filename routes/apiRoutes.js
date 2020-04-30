// apiRoutes 
// This code will route our api calls to the appropriate functions
//
// Eddie Saunders saunders.eddie@outlook.com 30th April 2020
//

const notes = require('../db/db.json');
// const path = require('path');
console.log("Our current path in apiRoutes.js:", __dirname);

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        console.log(__dirname);
        console.log(__filename);
        res.json(notes);
    });

    app.post('/api/notes', (req, res) => {
        console.log("Req Body:", req.body);
        const myNote = req.body
        notes.push(myNote);
        res.json(true);
    });
}