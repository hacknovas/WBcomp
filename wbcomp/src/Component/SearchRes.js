import React, { useEffect, useState } from 'react';
import DisplayProd from './DisplayProd';
import { ChatState } from '../ContextAPI/ConPro';
import axios from 'axios';

export default function SearchRes() {
    const { search_key,  } = ChatState();

    const [display_Res, set_Display_Res] = useState([]);
    const [display_searchKD, set_display_searchKD] = useState([]);

    const getAllProducts = async () => {

        if (search_key) {
            try {
                const result = await axios.post("prod/search", {
                    search_key
                });

                set_display_searchKD(result.data);

            } catch (error) {

            }

        }

        const result = await axios.get("prod/search");
        set_Display_Res(result.data);
    }

    useEffect(() => {
        getAllProducts();
    }, [search_key]);

    const seachbycategory = async (catg) => {
        set_display_searchKD([]);
        const result1 = await axios.post("prod/category", {
            catg
        })

        set_Display_Res(result1.data)
    }

    return (
        <>
            <div className="container-fluid" >
                <div className="d-flex align-items flex-row flex-wrap">
                    <div className="col-2 bg-light rounded my-2 p-2">
                        <div className=" text-dark w-100 selected  text-secondary mt-3 border-bottom rounded text-center">Category</div>
                        <div className="rounded  my-3">
                            <div className="btn w-100 my-3 rounded text-center shadow-lg" onClick={() => {
                                seachbycategory("Mobile")
                            }}>Mobiles</div>
                            <div className="btn w-100 my-3 rounded  text-center shadow-lg" onClick={() => {
                                seachbycategory("Electronics");
                            }} >Electronics</div>
                            <div className="btn w-100 my-3 rounded text-center shadow-lg" onClick={() => {
                                seachbycategory("Fashion");

                            }}>Fashion</div>
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="container mt-2" >
                            <form class="d-flex " role="search" onSubmit={async (e) => {
                                e.preventDefault();
                                try {
                                    const result = await axios.post("prod/search", {
                                        search_key: e.target["search"].value
                                    });
                                    set_display_searchKD(result.data);
                                } catch (error) {
                                }

                            }}>
                                <input class="form-control my-2" type="search" name="search" placeholder="Search" aria-label="Search" required />
                                <button class="btn btn-sm rounded py-0 btn-outline-success border mx-2 " type="submit">Search</button>
                            </form>
                        </div>
                        <div className='container'>
                            <div className="text-light my-2 mx-2 ">
                                RESULTS
                            </div>
                            <div className="d-flex flex-row justify-content-around flex-wrap">
                                {
                                    display_searchKD.map((res, i) => {
                                        return <DisplayProd key={i} id={res._id} name={res.Product_Name} image={res.Images.AmazonP}  />
                                    })
                                }
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex my-2 d-flex justify-content-around flex-row flex-wrap">
                            {
                                display_Res.map((res, i) => {
                                    return <DisplayProd key={i} id={res._id} name={res.Product_Name} image={res.Images.AmazonP} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}