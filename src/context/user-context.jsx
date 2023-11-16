import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    // USER ==========================================================
    // User States ============
    const [user, setUser] = useState(
        localStorage.getItem('user') || localStorage.getItem('user') === '' 
        ? localStorage.getItem('user') 
        : ''
    );

    // User Functions ============
    const loginAdmin = async (login) => {
        const response = await axios
        .post('http://localhost:3001/login', {
            username: login.username,
            password: login.password
        });

        setUser(response.data.name);
        window.location = '/';
    }

    function logoutAdmin () {
        setUser('');
        window.location = '/';
    }

    //  ============================================================

    useEffect(() => {
        localStorage.setItem('user', user);
    }, [user]);

    const userContextValue = {
        // User context values
        user,
        loginAdmin,
        logoutAdmin,
    }

    return (
        <UserContext.Provider value={userContextValue}>
            {props.children}
        </UserContext.Provider>
    );
};