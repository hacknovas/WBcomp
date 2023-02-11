import React from 'react';
import { ChatState } from '../ContextAPI/ConPro';
import { useNavigate } from "react-router-dom"

export default function DisplayProd(prop) {

    const { set_SelectedProd } = ChatState();
    const navigate = useNavigate();

    return (
        <>
            <div className="card mx mt-1 rounded shadow-lg  " style={{ width: "12rem", height: "auto" }} onClick={() => {
                set_SelectedProd(prop.id);
                navigate("/product");
            }} >
                <img src={prop.image} className="card-img-top" alt="Not Available" style={{ height: "10rem" }} />
                <div className="card-body">
                    <h5 className="card-title">{prop.name}</h5>
                </div>
            </div>
        </>
    )
}