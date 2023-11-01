import './login.css';

function Login () {
    return (
        <div className='login'>
            <div className='login-title'>Sign In</div>
            <form className='login-form'>
                <div className='input-fields'>
                    <input type='text' placeholder='Username' className='login-text'></input>
                    <input type='password' placeholder='Password' className='login-text'></input>
                </div>
                <br />
                <div className='login-submit'>
                    <button className='login-submit-btn'>LOGIN</button>
                </div>
            </form>
        </div>
    );
}

export default Login;