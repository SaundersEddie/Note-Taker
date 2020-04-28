// apiRoutes - This will handle the user api calls
// Eddie Saunders saunders.eddie@outlook.com 28th April 2020


const notesData = require('../db/db.json');
//const waitListData = require('../data/waitinglistData');

module.exports = (app) => {
  app.get('/api/notes', (req, res) => {
     res.json(notesData);
  });

  app.post('/api/notes', (req, res) => {
    // This needs to be notes data res.json(tableData);
 });

 app.delete('/api/notes', (req,res) => {
     // Delete those notes baby
 })

  app.get('/api/waitlist', (req, res) => {
    res.json(waitListData);
  });

};
