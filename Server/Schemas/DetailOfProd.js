const mongoose = require("mongoose");
const scrapData=require("../Scrapping/ftch")

const struct = new mongoose.Schema({
    Product_Name: {
        type: String,
        required: true
    },
    Links:
    {
        Amazon: {
            type: String
        },
        Flipkart: {
            type: String
        },
        Croma: {
            type: String
        }
    },
    Prices:
    {
        AmazonP: {
            type: String,
            default: "Not Available"
        },
        FlipkartP: {
            type: String,
            default: "Not Available"
        },
        CromaP: {
            type: String,
            default: "Not Available"
        }
    },
    Ratings: {
        AmazonP: {
            type: String,
            default: "Not Available"
        },
        FlipkartP: {
            type: String,
            default: "Not Available"
        },
        CromaP: {
            type: String,
            default: "Not Available"
        }
    },
    Images: {
        AmazonP: {
            type: String,
            default: "Not Available"
        }
    },
    Category: {
        Mobile: {
            type: Boolean,
            default: false
        },
        Electronics: {
            type: Boolean,
            default: false
        },
        Fashion: {
            type: Boolean,
            default: false
        }
    }
});

struct.method("getDetailFrom", async function () {
    try {
        const res1 = await scrapData(this.Links.Amazon, 1);
        this.Prices.AmazonP = await res1.Price;
        this.Ratings.AmazonP = await res1.Rating;
        this.Images.AmazonP = await res1.Image;

        const res2 = await scrapData(this.Links.Flipkart, 2);
        this.Prices.FlipkartP = await res2.Price;
        this.Ratings.FlipkartP = await res2.Rating;

        await this.save();
        return this;
    } catch (err) {
        console.log("Not Generated token")
    }
});

const coll = new mongoose.model("InsertedProduct", struct);

module.exports = coll;
