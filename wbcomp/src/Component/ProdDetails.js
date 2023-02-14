import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';

export default function ProdDetatils() {

    const[loading,set_loading]=useState(false);

    const [obj, setobj] = useState({
        Links: { "Amazon": "", "Flipkart": "", }, Prices: { "AmazonP": "", "FlipkartP": "" }, Ratings: { "AmazonP": "", "FlipkartP": "" }, Images: { "AmazonP": "" }, Product_Name: "",
    })

    const getSingleProduct = async () => {
        const res = await axios.post("/prod/single", {
            selectedProd: localStorage.getItem("OpenProduct")
        })

        setobj(res.data);
    }

    useEffect(() => {
        set_loading(true);

        setTimeout(()=>{
            getSingleProduct();
            set_loading(false);
        },1000)
    }, [])

    return (
        <>
            {
                <div class="card m-5 p-3 shadow" style={{ paddingTop: "100vh" }}>

                    <div className={`d-flex justify-content-center align-items-center ${loading ? "" : "d-none"}`} id='makenone' style={{ height: "60vh" }}>
                        <ColorRing
                            visible={loading}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        />
                    </div>

                    <div class={`d-flex flex-wrap flex-row ${loading ? "d-none" : ""}`} style={{ paddingTop: "3vh", paddingBottom: "3vh" }}>
                        <div class="col-4 text-center ">
                            <img src={obj.Images.AmazonP} class="img-fluid " alt="NA" />
                        </div>
                        <div class="col-8">
                            <div class="card-body">
                                <h5 class="card-title mb-4">{obj.Product_Name}</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div><hr /></div>
                                <div className="d-flex flex-row flex-wrap justify-content-center ">
                                    <div className='mx-2 my-2 text-center'>
                                        <button type="button " className="btn border w-100">
                                            <div className="badge text-dark border-bottom">Amazon</div><br />
                                            <div className="btn">Price:</div>
                                            <div className="btn">{obj.Prices.AmazonP}</div><hr />
                                            Rating:
                                            <div className="">{obj.Ratings.AmazonP}</div>
                                        </button>
                                        <div className='btn btn-primary w-100 mt-2  '><a href={obj.Links.Amazon} style={{ textDecoration: "none" }} className=" text-light " target="_blank">Visit Site</a></div>
                                    </div>

                                    <div className='mx-2 my-2 text-center'>
                                        <button type="button" className="btn border w-100   ">
                                            <div className="badge border-bottom text-dark">Flipkart</div><br />
                                            <div className="btn">Price:</div>
                                            <div className="btn">{obj.Prices.FlipkartP}</div><hr />
                                            Rating:
                                            <div className="">{obj.Ratings.FlipkartP}</div>
                                        </button>
                                        <div className='btn btn-primary w-100 mt-2  '><a href={obj.Links.Flipkart} style={{ textDecoration: "none" }} className="text-light" target="_blank">Visit Site</a>
                                        </div>
                                    </div>
                                </div>
                                <p class="card-text"><small class="text-muted">Last updated month ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}