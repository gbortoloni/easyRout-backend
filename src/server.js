const express = require("express");
const app = express();

require("./startup/routes")(app);
require("./startup/db")();

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`Escutando porta ${port}...`));
