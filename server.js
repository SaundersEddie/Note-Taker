// Create and run our server using express, we will use local port 9000 or whatever we're 
// assigned on our hosting
// 
// Eddie Saunders saunders.eddie@outlook.com 30th April 2020
// 

const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;
console.log ("Our current path with server.js:", __dirname);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
  console.log('App listening on PORT: ' + PORT);
  // console.log (app._router.stack);
});