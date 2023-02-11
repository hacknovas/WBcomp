const mongoose = require("mongoose");
const bcrypt=require("bcryptjs")

const adminSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Pass: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

adminSchema.methods.matchPass = async function (enterPass) {
    return await bcrypt.compare(enterPass, this.Pass);
}

adminSchema.pre("save", async function (next) {
    if (!this.isModified) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.Pass = await bcrypt.hash(this.Pass, salt);
})

const admin = new mongoose.model("Admin", adminSchema);

module.exports = admin;
