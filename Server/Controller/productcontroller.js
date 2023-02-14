const coll = require("../Schemas/DetailOfProd");
const scrapData = require("../Scrapping/ftch");

const checkData = async (AmzLink, FlpLink) => {
    const res1 = await scrapData(AmzLink, 1);
    const AmazonP_Price = await res1.Price;

    const res2 = await scrapData(FlpLink, 2);
    const FlipkartP_Price = await res2.Price;

    return {
        AmazonP_Price,
        FlipkartP_Price,
    }
}

const searchProduct = async (req, res) => {
    try {
        let key = req.body["search_key"];
        const data = await coll.find({ "Product_Name": { '$regex': key, '$options': 'i' } });

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


    setTimeout(async () => {
        const updated_Data = await checkData(data.Links.Amazon, data.Links.Flipkart)
        if (updated_Data.AmazonP_Price.length > 1 && updated_Data.FlipkartP_Price.length > 1) {
            if (updated_Data.AmazonP_Price != data.Prices.AmazonP || data.Prices.FlipkartP != updated_Data.FlipkartP_Price) {
                const result = await data.getDetailFrom();
            }
        }
    }, 3000)

    res.status(200).send(data);
}

module.exports = { searchProduct, Allproducts, searchCategory, addProducts, singleProduct }