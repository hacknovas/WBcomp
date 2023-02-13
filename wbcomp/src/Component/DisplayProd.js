import React from 'react';
import { useNavigate } from "react-router-dom"

export default function DisplayProd(prop) {

    const navigate = useNavigate();

    return (
        <>
            <div className="d-flex card my-2 p-2 rounded shadow-lg" style={{ width: "12rem", height: "auto" }} onClick={() => {
                localStorage.setItem("OpenProduct", prop.id);
                navigate("/product");
            }} >
                <div className='flex-shrink-0'>
                    <img src={prop.image} className="card-img-top" alt="Not Available" style={{ height: "10rem" }} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{prop.name}</h5>
                </div>
            </div>
        </>
    )
}
