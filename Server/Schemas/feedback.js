const mongoose = require("mongoose");

const struct1 = new mongoose.Schema({
    Name: {
        type: String
    },
    rate: {
        type: String
    },
    message: {
        type: String
    }
});

const coll1 = new mongoose.model("feedbacks", struct1);

module.exports = coll1;