'use strict';

const express = require("express");
const app = express();
const routerModule = require('./router/Router');
const cors = require('./middleware/Cors');
const PORT = 5000;

app.use(cors);

// parse application/json
app.use(express.json());

routerModule(app);

function start() {
  try {
    app.listen(PORT, () => console.log(`app has been started on port: ${PORT}`));
  } catch(e) {
    console.log("Server Error", e.message)
    process.exit(1)
  }

}

start();