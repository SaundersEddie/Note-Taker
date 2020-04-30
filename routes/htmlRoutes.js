// htmlRoutes
// This code will route all HTML page requests to the appropriate page
//
// Eddie Saunders saunders.eddie@outlook.com 30th April 2020

const path = require('path');
console.log ("Our current path in htmlRoutes.js:", __dirname);

// Here are oour HTML routing, the first will show the notes html when requested, the second will show index.html for anything else
// entered

module.exports = (app) => {

    // app.get('/index', (req, res) => {
    //     console.log ("index path:", path.join(__dirname,"../public/index.html"));
    //     res.sendFile(path.join(__dirname, "../pubic/index.html"));
    //   });

    app.get('/notes', (req, res) => {
      console.log ("notes path:", path.join(__dirname,"../public/notes.html"));
      res.sendFile(path.join(__dirname, "../public/notes.html"));
    });  

    // If no matching route is found default to index.html
    app.get('*', (req, res) => {
      console.log ("No valid entry path defaulting to index.html");
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  };