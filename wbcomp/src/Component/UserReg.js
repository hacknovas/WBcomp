import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function UserReg() {


    const credentialHandler = async (e) => {
        e.preventDefault();

        const res = await axios.post("user/register", {
            Name: e.target["name"].value,
            Pass: e.target["pass"].value,
            Email: e.target["email"].value
        })
    }

    return (
        <>
            <form onSubmit={credentialHandler} style={{ "height": "100vh", "width": "50%", "paddingTop": "25vh" }} className="container justify-content-center my-5 " >
                <div class="form-group" >
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' placeholder="Enter Name" />
                </div>
                <div class="form-group" >
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" name='pass' id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <div className='text-center'>
                    <Link to="/Login" style={{ textDecoration: "none", color: "black" }}>Login</Link>
                </div>
            </form>

        </>
    )
}