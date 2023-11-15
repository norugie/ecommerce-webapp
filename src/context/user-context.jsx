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
    function loginAdmin (login) {
        axios
        .post('http://localhost:3001/login', {
            username: login.username,
            password: login.password
        })
        .then((response) => {
            if (response.status === 200) {
                setUser(response.data[0].name);
                window.location = '/';
            }
        });
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