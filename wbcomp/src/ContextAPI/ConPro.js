import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const Myapi = createContext();

const ChatProvider = (prop) => {
    const navigate = useNavigate();

    const [search_key, set_Search_Key] = useState("");
    const [selectedProd, set_SelectedProd] = useState("");
    const [isLogin, set_isLogin] = useState(false);
    const [loggedUser, set_LoggedUser] = useState();
    const [selectedProd_data, set_SelectedProd_data] = useState({});

    useEffect(() => {
        const userinfo = JSON.parse(localStorage.getItem("UserInfo"));
        set_LoggedUser(userinfo);
        // console.log("1");
    }, [navigate])

    return (
        <Myapi.Provider value={{ loggedUser, set_LoggedUser, search_key, set_Search_Key, selectedProd, set_SelectedProd, isLogin, set_isLogin, selectedProd_data, set_SelectedProd_data }}>
            {prop.children}
        </Myapi.Provider>
    )
}

export const ChatState = () => {
    return useContext(Myapi);
}

export default ChatProvider;
