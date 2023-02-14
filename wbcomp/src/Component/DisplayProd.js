import React from 'react';
import { useNavigate } from "react-router-dom"

export default function DisplayProd(prop) {

    const navigate = useNavigate();

    return (
        <>
            <div className="d-flex flex-wrap card my-3 rounded shadow-lg" onClick={() => {
                localStorage.setItem("OpenProduct", prop.id);
                navigate("/product");
            }} >
                <div className=''>
                    <img src={prop.image} className="card-img-top img-fluid" alt="Not Available" style={{ height: "18vmin", width: "12vmax" }} />
                    <div className="">
                        <div className="card-title text-responsive">{String(prop.name)}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

//  style={{ width: "20vmin", height: "20vmin" }}
