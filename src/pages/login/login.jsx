import { useContext, useState } from 'react';
import { UserContext } from '../../context/user-context';

import './login.css';

function Login () {
    const { loginAdmin } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin (e) {
        e.preventDefault();
        if (!username || !password) return;

        const login = {
            username: username,
            password: password
        }

        loginAdmin(login);
        
        setUsername('');
        setPassword('');
    }
    return (
        <div className='login'>
            <div className='login-title'>Sign In</div>
            <form className='login-form' onSubmit={handleLogin}>
                <input 
                    type='text'
                    id='login-username'
                    className='login-text'
                    autoComplete='off'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => (setUsername(e.target.value))}
                />
                <input 
                    type='password'
                    id='login-password'
                    className='login-text'
                    placeholder='Password' 
                    value={password}
                    onChange={(e) => (setPassword(e.target.value))}
                />
                <br />
                <div className='login-submit'>
                    <button className='login-submit-btn'>LOGIN</button>
                </div>
            </form>
        </div>
    );
}

export default Login;