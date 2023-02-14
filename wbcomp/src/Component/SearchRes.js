import React, { useEffect, useState } from 'react';
import DisplayProd from './DisplayProd';
import { ChatState } from '../ContextAPI/ConPro';
import axios from 'axios';
import { ColorRing } from "react-loader-spinner"

export default function SearchRes() {
    const { search_key, } = ChatState();

    const [display_Res, set_Display_Res] = useState([]);
    const [display_searchKD, set_display_searchKD] = useState([]);
    const [loading, set_loading] = useState(false);

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
        set_loading(true);
        const dt=document.querySelector("#makenone");

        setTimeout(()=>{
            getAllProducts();
            dt.style.display="none";
            set_loading(false);

            // dt.style.display="none"
            
        },1000)

    }, [search_key]);

    const seachbycategory = async (catg) => {
        set_loading(true)
        set_display_searchKD([]);
        const result1 = await axios.post("prod/category", {
            catg
        })

        set_Display_Res(result1.data)
        set_loading(false)
    }

    return (
        <>
            <div className="container-fluid " >
                <div className="d-flex align-items flex-wrap">
                    <div className="col-2 bg-light rounded my-2 p-2 " >
                        <div className=" selected text-light bg-dark mt-3 border-bottom shadow-lg text-center">Category</div>
                        <div className=" rounded my-4">
                            <div className=" my-3 rounded text-center shadow-lg" onClick={() => {
                                seachbycategory("Mobile")
                            }}>Mobiles</div>
                            <div className="  my-3 rounded  text-center shadow-lg" onClick={() => {
                                seachbycategory("Electronics");
                            }} >Electronics</div>
                            <div className=" my-3 rounded text-center shadow-lg" onClick={() => {
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

                        <div className="btn text-light my-2 mx-2 ">
                            RESULTS
                        </div>

                        {/*  */}
                        <div className={`d-flex justify-content-center align-items-center ${ loading?"":"d-none" }`}  id='makenone' style={{height:"60vh"}}>
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
                        {/*  */}
                        {

                            loading ? "" :

                                <div>
                                    <div className='container'>
                                        <div className="d-flex flex-row justify-content-around flex-wrap" >
                                            {
                                                display_searchKD.map((res, i) => {
                                                    return <DisplayProd key={i} id={res._id} name={res.Product_Name} image={res.Images.AmazonP} />
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
                        }
                    </div>

                </div>
            </div>
        </>
    )
}