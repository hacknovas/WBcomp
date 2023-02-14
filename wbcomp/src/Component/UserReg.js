import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function UserReg() {

    const navigate = useNavigate();

    const credentialHandler = async (e) => {
        e.preventDefault();

        try {


            if (! e.target["name"].value || !e.target["pass"].value || !e.target["email"].value) {
                throw Error
            }

            const res = await axios.post("user/register", {
                Name: e.target["name"].value,
                Pass: e.target["pass"].value,
                Email: e.target["email"].value
            })


            navigate("/login");
            toast("User Registered Successfuly");

        } catch (error) {
            if (error.response.status == 401) {
                toast("User Already Exist.");
            } else {
                toast("Invalid Email or Password");
            }
        }
    }


    return (
        <>
            <form onSubmit={credentialHandler} style={{ "height": "100vh", "width": "50%", "paddingTop": "25vh" }} className="container justify-content-center my-5 shadow-sm text-light" >
                <div class="form-group" >
                    <label for="exampleInputEmail1 " className='my-2'>Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' placeholder="Enter Name" />
                </div>
                <div class="form-group" >
                    <label for="exampleInputEmail1" className='my-2'>Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" className='my-2'>Password</label>
                    <input type="password" class="form-control" name='pass' id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" class="btn my-3 btn-primary">Sign Up</button>
                <div className='text-center'>
                    <Link to="/Login" className='btn border-dark' style={{ textDecoration: "none", color: "black" }}>Login</Link>
                </div>
            </form>
            <ToastContainer hideProgressBar={true} position="bottom-right" />

        </>
    )
}