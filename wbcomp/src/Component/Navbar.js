import React from 'react';
import { ChatState } from '../ContextAPI/ConPro';
import { useNavigate, Link } from 'react-router-dom';

export default function Nabar() {

    const { loggedUser } = ChatState();

    const navigate = useNavigate()
    return (
        <>
            <div className="d-flex mb-3 shadow  justify-content-around" style={{ "backgroundColor": "#161622" }}>
                <div className='shadow' >
                    <img src="./images/logo.png" style={{
                        WebkitFilter: "invert(1)",
                        filter: "invert(1)",
                    }} className="" height={"50vh"} />
                </div>

                <div className='btn text-light mt-2 p-1 ' onClick={()=>{
                    navigate("/")
                }}>
                    Home
                </div>


                <div class="btn-group ">
                    <div class="btn mt-1 dropdown-toggle text-light" data-bs-toggle="dropdown" >
                        {
                            loggedUser ? String(loggedUser.name).slice(0, 4) :
                                "Profile"
                        }
                    </div>

                    <div className=''>
                        <ul class="dropdown-menu">
                            {
                                loggedUser ?
                                    <div>
                                        <div className="text-center shadow border-bottom">
                                            {String(loggedUser.email).slice(0, 20)}
                                        </div>
                                        <li>
                                            <div class="dropdown-item   shadow border-bottom text-center border-top" onClick={() => {
                                                localStorage.clear();
                                                navigate("/login");
                                            }}>Logout
                                            </div>
                                        </li>
                                        {
                                            loggedUser.admin ?
                                                <li>
                                                    <div className='text-center shadow' >
                                                        <Link to="/newprod" style={{ textDecoration: "none" }} className="btn w-100 text-dark">Add Product</Link>
                                                    </div>
                                                </li>
                                                :
                                                <div></div>
                                        }
                                    </div>
                                    :
                                    <div>
                                        <li><Link class="dropdown-item" to="/login">Login</Link></li>
                                    </div>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}