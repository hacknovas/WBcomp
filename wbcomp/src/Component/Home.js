import React from "react";
import SearchRes from "./SearchRes";
import { ChatState } from "../ContextAPI/ConPro";
import { ToastContainer, toast } from 'react-toastify';


export default function Home() {
    const { search_key, set_Search_Key } = ChatState();

    const handleSearch = (e) => {
        e.preventDefault();
        set_Search_Key(e.target["search"].value);
    }

    localStorage.removeItem("OpenProduct")

    return (
        <>
            <div>
                {
                    search_key == [] ?
                        <div className="d-flex justify-content-center align-items-center "style={{height:"70vh"}}>
                            <form class="d-flex" style={{ height: "5vh", width: "60vw" }} role="search" onSubmit={handleSearch}>
                                <input class="form-control me-2" type="search" name="search" placeholder="Search" aria-label="Search" />
                                <button class="btn text-light btn-outline-success flex-wrap" type="submit">Search</button>
                            </form>
                        </div>
                        :
                        <SearchRes />
                }
                <ToastContainer hideProgressBar={true} position="bottom-right" />
            </div>
        </>
    )
}