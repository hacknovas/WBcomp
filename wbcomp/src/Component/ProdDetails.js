import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ChatState } from '../ContextAPI/ConPro';

export default function ProdDetatils() {

    const { selectedProd } = ChatState();

    const [obj, setobj] = useState({
        Links: { "Amazon": "", "Flipkart": "", }, Prices: { "AmazonP": "", "FlipkartP": "" }, Ratings: { "AmazonP": "", "FlipkartP": "" }, Images: { "AmazonP": "" }, Product_Name: "",
    })

    const getSingleProduct = async () => {
        const res = await axios.post("/prod/single", {
            selectedProd
        })

        setobj(res.data);

    }

    useEffect(() => {
        getSingleProduct();
    }, [selectedProd])

    return (
        <>
            {

                <div class="card m-5 p-3 shadow " >
                    <div class="row ">
                        <div class="col-4 text-center border-bottom border-end shadow">
                            <img src={obj.Images.AmazonP} class="img-fluid rounded-start" alt="NA" />
                        </div>
                        <div class="col-8">
                            <div class="card-body">
                                <h5 class="card-title   mb-4">{obj.Product_Name}</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <hr />
                                <div className="d-flex">
                                    <div className='container mb-2 col-6'>
                                        <button type="button" className="btn   border ">
                                            <div className="badge text-dark border-bottom">Amazon</div><br />
                                            <div className="btn">Price:</div>
                                            <div className="btn">{obj.Prices.AmazonP}</div><hr />
                                            Rating:
                                            <div className="">{obj.Ratings.AmazonP}</div>
                                        </button>
                                        <div className='btn btn-primary mx-5'><a href={obj.Links.Amazon} style={{ textDecoration: "none" }} className="text-light" target="_blank">Visit Site</a></div>
                                    </div>

                                    <div className='container mb-2 col-6'>
                                        <button type="button" className="btn border">
                                            <div className="badge border-bottom text-dark">Flipkart</div><br />
                                            <div className="btn">Price:</div>
                                            <div className="btn">{obj.Prices.FlipkartP}</div><hr />
                                            Rating:
                                            <div className="">{obj.Ratings.FlipkartP}</div>
                                        </button>
                                        <div className='btn btn-primary mx-5'><a href={obj.Links.Flipkart} style={{ textDecoration: "none" }} className="text-light" target="_blank">Visit Site</a>
                                        </div>
                                    </div>
                                </div>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}