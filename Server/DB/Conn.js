const mongoose = require("mongoose");

mongoose.connect(process.env.DB, () => {
    console.log("Connected to DB")
})