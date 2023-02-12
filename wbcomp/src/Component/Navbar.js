import React from 'react';
import { ChatState } from '../ContextAPI/ConPro';
import { useNavigate, Link } from 'react-router-dom';

export default function Nabar() {

    const { isLogin, set_isLogin, loggedUser } = ChatState();

    const navigate = useNavigate()
    return (
        <>
            <div className="navbar navbar-expand  shadow-bottom " style={{ "backgroundColor": "#0b0b13" }}>
                <div className="container">

                    <Link to="/" className="navbar-brand  text-light" >WBComp</Link>

                    <div class="btn-group">
                        <button type="button" class="btn dropdown-toggle  text-light" data-bs-toggle="dropdown" >
                            {
                                loggedUser ? String(loggedUser.name).slice(0, 4) :
                                    "Profile"
                            }
                        </button>
                        <ul class="dropdown-menu ">
                            {
                                loggedUser ?
                                    <div>
                                        <div className="btn ">
                                            <div className="btn-sm">
                                                {String(loggedUser.email).slice(0,20)}
                                            </div>
                                        </div>
                                        <li><div class="dropdown-item btn bg-secondary border-bottom mb-2  text-center border-top" onClick={() => {
                                            localStorage.clear();
                                            // set_isLogin(false);
                                            navigate("/login");
                                        }}>Logout</div>
                                        </li>
                                        {
                                            loggedUser.admin ?
                                                <div className='text-center bg-secondary' >
                                                    <li>
                                                        <Link to="/newprod" style={{textDecoration:"none"}} className="btn w-100 text-dark">Add Product</Link>
                                                    </li>
                                                </div>
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