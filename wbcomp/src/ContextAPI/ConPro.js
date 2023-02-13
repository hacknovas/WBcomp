import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const Myapi = createContext();

const ChatProvider = (prop) => {
    const navigate = useNavigate();

    const [search_key, set_Search_Key] = useState("");
    const [loggedUser, set_LoggedUser] = useState();

    useEffect(() => {
        const userinfo = JSON.parse(localStorage.getItem("UserInfo"));
        set_LoggedUser(userinfo);
    }, [navigate])

    return (
        <Myapi.Provider value={{ loggedUser, set_LoggedUser, search_key, set_Search_Key }}>
            {prop.children}
        </Myapi.Provider>
    )
}

export const ChatState = () => {
    return useContext(Myapi);
}

export default ChatProvider;
