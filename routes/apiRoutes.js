// apiRoutes - This will handle the user api calls
// Eddie Saunders saunders.eddie@outlook.com 28th April 2020


const notes = require('../db/db.json');

module.exports = (app) => {
  app.get('/api/notes', (req, res) => {
     res.json(notesData);
  });

  app.post('/api/notes', (req, res) => {
    // This needs to be notes data res.json(tableData);
    console.log ("Req Body:",req.body);
   const myNote = req.body
   // console.log ("My Note",myNote);
  notes.push(myNote);
   res.json(notes);
   //res.json(true);
 });

 app.delete('/api/notes', (req,res) => {
     // Delete those notes baby
 });

};
