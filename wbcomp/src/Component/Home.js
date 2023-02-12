import React from "react";
import SearchRes from "./SearchRes";
import { ChatState } from "../ContextAPI/ConPro";

export default function Home() {
    const { search_key, set_Search_Key } = ChatState();

    const handleSearch = (e) => {
        e.preventDefault();
        set_Search_Key(e.target["search"].value);
    }

    localStorage.removeItem("OpenProduct")

    return (
        <>
            {
                search_key == [] ?
                    <div>
                        <div className="w-100 " style={{ "height": "100vh", "padding": "25vh" }}>
                            <form class="d-flex " role="search" onSubmit={handleSearch}>
                                <input class="form-control me-2" type="search" name="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    :
                    <SearchRes />
            }

        </>
    )
}