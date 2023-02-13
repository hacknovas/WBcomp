import axios from 'axios';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {
    const notify = (msg) => toast(msg);

    const [check, Set_check] = useState(false);
    const navigate = useNavigate();

    const credentialHandler = async (e) => {
        e.preventDefault();
        try {
            if (check) {
                const res = await axios.post("user/admin/login", {
                    Email: e.target["email"].value,
                    Pass: e.target["pass"].value
                });
                localStorage.setItem("UserInfo", JSON.stringify(res.data));
                localStorage.setItem("IsAdmin", true);
                navigate("/")
            } else {
                console.log("mahi1");

                const res = await axios.post("user/login", {
                    Email: e.target["email"].value,
                    Pass: e.target["pass"].value
                });

                localStorage.setItem("UserInfo", JSON.stringify(res.data))

                navigate("/")
            }
            notify("Login Successfully")
        } catch (err) {
            console.log(err);
            notify("Invalid Email or Password");
        }

    }

    return (
        <>
            <form onSubmit={credentialHandler} style={{ "height": "100vh", "width": "50%", "paddingTop": "25vh" }} className="container justify-content-center my-5 shadow-sm " >
                <div class="form-group" >
                    <label htmlFor="exampleInputEmail1" className='my-2'>Email Address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputPassword1" className='my-2'>Password</label>
                    <input type="password" class="form-control" name='pass' id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-group form-check my-2 mx-1">
                    <input type="checkbox" name='ch' value={check} onClick={() => {
                        check ? Set_check(false) : Set_check(true);
                    }} class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" htmlFor="exampleCheck1">Admin</label>
                </div>
                <button type="submit" class="btn my-3 btn-primary">Login</button>
                <div className='text-center'>
                    <Link to="/register" className='btn  border-dark' style={{ textDecoration: "none", color: "black" }}>Sign Up</Link>
                </div>
            </form>
            <ToastContainer hideProgressBar={false} position="bottom-right" />

        </>
    )
}