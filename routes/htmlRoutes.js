// HTML table routes here
// Eddie Saunders saunders.eddie@outlook.com 28th April 2020


const path = require('path');
console.log ("Our current path:", __dirname);

// Here are oour HTML routing, the first will show the notes html when requested, the second will show index.html for anything else
// entered

module.exports = (app) => {
    app.get('/notes', (req, res) => {
      console.log ("notes path:", path.join(__dirname,"../public/notes.html"));
      res.sendFile(path.join(__dirname, "../public/notes.html"));
    });  

    app.get('/index', (req, res) => {
      console.log ("index path:", path.join(__dirname,"../public/index.html"));
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // If no matching route is found default to index.html
    app.get('*', (req, res) => {
      console.log ("No valid entry path defaulting to index.html");
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  };