import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../ContextAPI/ConPro";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Bars, ColorRing } from "react-loader-spinner";


export default function ProductAdd() {

    const { loggedUser } = ChatState();
    const [loading, set_loading] = useState(false);

    const navigate = useNavigate();

    const addProductDetails = async (e) => {
        e.preventDefault();

        set_loading(true);
        try {
            const res = await axios.post("prod/addProd", {
                name: e.target["names"].value,
                amazon: e.target["amazon"].value,
                flipkart: e.target["flipkart"].value,
                croma: e.target["croma"].value,
                Category: e.target["selection"].value
            })

            toast("Product Added Sucessfully");
        } catch (error) {
            toast("Internal Server Error");
        }
        set_loading(false);

    }

    useEffect(() => {
        return () => {
            if (!(localStorage.getItem("IsAdmin"))) {
                navigate('/')
                console.log("1");
            }
        }
    }, [loggedUser])

    return (
        <>
            <div className="row container-fluid py-5">



                <div className="col-7">
                    <div className="m-5 ">
                        <form onSubmit={addProductDetails} className="border-bottom d-flex flex-column text-center mb-3  pb-2 px-2 rounded">
                            <div className="btn shadow rounded text-light mb-3">
                                Product Details
                            </div>
                            <div className="mb-3">
                                <div className="badge ">Name:</div><br />
                                <input type="text" name="names" className="w-75 rounded" required />
                            </div>
                            <div className="mb-3">
                                <div className="badge ">Flipkart:</div><br />
                                <input type="text" name="flipkart" className="w-75 rounded" required />
                            </div>
                            <div className="mb-3 ">
                                <div className="badge ">Amazon:</div><br />
                                <input type="text" name="amazon" className="w-75 rounded" required />
                            </div>
                            <div className="mb-3  ">
                                <div className="badge ">Croma:</div><br />
                                <input type="text" name="croma" className="w-75 rounded" />
                            </div>
                            <div className="mx-5 my-2 " style={{}}>
                                <select class="form-select mb-3 " name="selection" aria-label="Default select example" >
                                    <option selected>Category</option>
                                    <option value="Mobile">Mobiles</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Fashion">Fashion</option>
                                </select>
                            </div>

                            <input type="submit" className={`mt-3 btn btn-sm text-light border ${!loading ? "" : "d-none"}`} value="Add Product" />
                            <div className={` ${loading ? "w-100 text-center btn " : "d-none"}`} id='makenone' >
                                <Bars
                                    height="30"
                                    width="80"
                                    color="orange"
                                    ariaLabel="bars-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={loading}
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-5">
                </div>
                <ToastContainer hideProgressBar={true} position="bottom-right" />

            </div>
        </>
    )
}