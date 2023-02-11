import React from 'react';
import { ChatState } from '../ContextAPI/ConPro';
import { useNavigate,Link } from 'react-router-dom';

export default function Nabar() {

    const { isLogin, set_isLogin, loggedUser } = ChatState();

    const navigate = useNavigate()
    return (
        <>
            <div className="navbar navbar-expand text-dark shadow-sm rounded">
                <div className="container text-dark">

                    <Link to="/" className="navbar-brand">WBComp</Link>

                    <div class="btn-group">
                        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" >
                            {
                                loggedUser ? loggedUser.name :
                                    "Profile"
                            }
                        </button>
                        <ul class="dropdown-menu">
                            {
                                loggedUser ?
                                    <div>
                                        <div className="btn ">
                                            <div className="badge bg-secondary">Email</div>
                                            {loggedUser.email}
                                        </div>
                                        <hr />
                                        <li><div class="dropdown-item" onClick={() => {
                                            localStorage.clear();
                                            navigate("/login");
                                        }}>Logout</div></li>
                                        {
                                            loggedUser.admin ?
                                                <div>
                                                    <li>
                                                        <Link to="/newprod">Add Product</Link>
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