import React from "react";
import axios from "axios";

export default function ProductAdd() {

    const addProductDetails = async (e) => {
        e.preventDefault();

        const res = await axios.post("prod/addProd", {
            name: e.target["names"].value,
            amazon: e.target["amazon"].value,
            flipkart: e.target["flipkart"].value,
            croma: e.target["croma"].value,
            Category: e.target["selection"].value
        })
    }

    return (
        <>
            <div className="row container-fluid py-5">
                <div className="col-7">
                    <div className="m-5">
                        <form onSubmit={addProductDetails}>
                            <div className="btn w-50 bg-light text-dark mb-3">
                                Product Details
                            </div>
                            <div className="mb-3">
                                <div className="badge">Name:</div><br />
                                <input type="text" name="names" className="w-50" required />
                            </div>
                            <div className="mb-3">
                                <div className="badge">Flipkart:</div><br />
                                <input type="text" name="flipkart" className="w-50" required />
                            </div>
                            <div className="mb-3 ">
                                <div className="badge">Amazon:</div><br />
                                <input type="text" name="amazon" className="w-50" required />
                            </div>
                            <div className="mb-3 ">
                                <div className="badge">Croma:</div><br />
                                <input type="text" name="croma" className="w-50" />
                            </div>

                            <select class="form-select  mb-3 w-50" name="selection" aria-label="Default select example">
                                <option selected>Category</option>
                                <option value="Mobile">Mobiles</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Fashion">Fashion</option>
                            </select>

                            <input type="submit" className="mt-3 btn btn-sm bg-light border" value="Add Product" />
                        </form>
                    </div>
                </div>
                <div className="col-5">
                    go1
                </div>
            </div>
        </>
    )
}