import './login.css';

function Login () {
    return (
        <div className='login'>
            <div className='login-title'>Sign In</div>
            <form className='login-form'>
                <input 
                    type='text'
                    id='login-username'
                    className='login-text'
                    autoComplete='off'
                    placeholder='Username'  
                />
                <input 
                    type='password'
                    id='login-password'
                    className='login-text'
                    placeholder='Password' 
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