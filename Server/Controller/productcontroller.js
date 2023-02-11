const coll = require("../Schemas/DetailOfProd");

const searchProduct = async (req, res) => {
    try {
        let key = req.body["search_key"];
        const data = await coll.find({ "Product_Name": { '$regex': key, '$options': 'i' } });

        console.log(data);
        res.status(200).send(data);


    } catch (err) {
        res.status(400).send({ message: "Not Found" });
    }
}

const Allproducts = async (req, res) => {
    const data = await coll.find();
    res.status(200).send(data);
}
const searchCategory = async (req, res) => {
    let f1 = false, f2 = false, f3 = false;
    let dt = req.body["catg"];
    if (dt == "Fashion") {
        f3 = true;
    } else if (dt == "Electronics") {
        f2 = true
    } else if (dt == "Mobile") {
        f1 = true;
    }

    const data = await coll.find({
        Category: {
            Mobile: f1,
            Electronics: f2,
            Fashion: f3
        }
    });

    res.status(200).send(data);
}

const addProducts = async (req, res) => {
    const cat = req.body["Category"];
    var temp1 = false, temp2 = false, temp3 = false;
    if (cat == "Electronics") {
        temp1 = true;
    } else if (cat == "Fashion") {
        temp2 = true;
    } else if (cat == "Mobile") {
        temp3 = true;
    }

    let demo = {
        Product_Name: req.body["name"].toUpperCase(),
        Links: { Flipkart: req.body["flipkart"], Amazon: req.body["amazon"], Croma: req.body["croma"] },
        Category: {
            Mobile: temp3,
            Electronics: temp1,
            Fashion: temp2
        }
    }
    const dm = new coll(demo);
    const results = await dm.save();

    const updated = await results.getDetailFrom();

    res.status(200).send({ mes: "Submited" });
}

const singleProduct = async (req, res) => {
    const data = await coll.findOne({ _id: req.body.selectedProd });

    // if (data.Prices.AmazonP != req.body.Prices.AmazonP || data.Prices.FlipkartP != req.body.Prices.FlipkartP) {
    //     const result = await data.getDetailFrom();
    // }

    res.status(200).send(data);
}

module.exports = { searchProduct, Allproducts, searchCategory, addProducts, singleProduct }