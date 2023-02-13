const Admin = require("../Schemas/Admin");
const User = require("../Schemas/RegUser");
const generateTokent = require("../config/generateToken")

const newRegister = async (req, res) => {
    const { Name, Email, Pass } = req.body;
    const userExist = await User.findOne({ Email });

    if (userExist) {
        res.status(401).send(new Error("User Already Created"));
    }

    const user = await User.create({
        Name, Email, Pass
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            Name: user.Name,
            Email: user.Email,
            token: generateTokent(user._id),
        })
    } else {
        res.status(400).send(new Error("Invalid Email or_Password"));
    }

}

const getAdmin = async (req, res) => {
    const { Email, Pass } = req.body;
    const user = await Admin.findOne({ Email });
    if (user && (await user.matchPass(Pass))) {
        res.status(201).json({
            _id: user._id,
            name: user.Name,
            email: user.Email,
            admin: true,
            token: generateTokent(user._id),
        })
    } else {
        res.status(401).send(new Error("Invalid Email or Password"));
    }
}

const getUser = async (req, res) => {
    const { Email, Pass } = req.body;
    const user = await User.findOne({ Email });
    if (user && (await user.matchPass(Pass))) {
        res.status(201).json({
            _id: user._id,
            name: user.Name,
            email: user.Email,
            admin: false,
            token: generateTokent(user._id),
        })
    } else {
        res.status(401).send(new Error("Invalid Email or Password"));
        
    }
}

module.exports = { newRegister, getUser, getAdmin }