const express = require("express")
require('dotenv').config();
require("./DB/Conn");
const prod_route = require("./Routes/ProductRoute");
const user_route = require("./Routes/UserRoutes");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080;

app.use("/prod", prod_route);
app.use("/user",user_route);

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})