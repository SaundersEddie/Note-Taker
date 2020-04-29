const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// console.log (app._router.stack);
app.listen(PORT, () => {
  console.log('App listening on PORT: ' + PORT);
  // console.log (app._router.stack);
});
