// HTML table routes here
// Eddie Saunders saunders.eddie@outlook.com 28th April 2020


const path = require('path');

// Here are oour HTML routing, the first will show the notes html when requested, the second will show index.html for anything else entered
module.exports = (app) => {
    app.get('/notes', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/notes.html'));
    });  
    // If no matching route is found default to home
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });
  };