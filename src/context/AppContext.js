import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    // Load role from localStorage when the app starts
    const storedRole = localStorage.getItem("userRole");
    const storedLoginStatus = localStorage.getItem("isLoggedIn") === "true";

    const [isAdmin, setIsAdmin] = useState(storedRole === "Admin");
    const [isLogin, setIsLogin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(storedLoginStatus);
    const [userRole, setUserRole] = useState(""); // Add userRole state

    // Update localStorage when isAdmin or isLoggedIn changes
    useEffect(() => {
        localStorage.setItem("userRole", isAdmin ? "Admin" : "Candidate");
    }, [isAdmin]);

    useEffect(() => {
        localStorage.setItem("isLoggedIn", isLoggedIn);
    }, [isLoggedIn]);

    const value = {
        isAdmin, setIsAdmin,
        isLogin, setIsLogin,
        isLoggedIn, setIsLoggedIn,
        userRole, setUserRole,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
