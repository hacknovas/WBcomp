const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
    },
    Pass: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
    Message: [
        {
            PName: {
                type: String,
                required: true
            },
            Mess: {
                type: String,
                required: true
            }
        }
    ],
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});


userSchema.methods.matchPass = async function (enterPass) {
    return await bcrypt.compare(enterPass, this.Pass);
}

userSchema.pre("save", async function (next) {
    if (!this.isModified) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.Pass = await bcrypt.hash(this.Pass, salt);
})

const rgu = new mongoose.model("RegisterdUser", userSchema);

module.exports = rgu;
