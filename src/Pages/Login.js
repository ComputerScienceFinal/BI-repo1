import React from 'react'
import icon from '../assets/logoOpq.png';
import google from '../assets/gg.png';
import '../styles/Login.css'
import '../fonts/fonts.css'
import {useNavigate} from 'react-router-dom';
// import { useMatch } from 'react-router-dom';


function Login() {
let history = useNavigate(); 

  return (
    <div className='login'>
        <div className='topBar'>
            <div className='subBar'>
                <img src={icon} alt ="" width={32}/>
                <h1>B•I•poultry</h1>
            </div>
        </div>

        <div className='greenbar'>

        </div>

        <img className='iconBig' src={icon} alt="" width={67}/>

        <p>
            reliable  |  insightful  |  effective
        </p>

        <div className='loginCard'>
            <div className='greenHeader'>
                <h1>Login</h1>
            </div>
            <div className='detailsPart'>
                <input name='username' placeholder='   Email Address' type='text'></input>
                <input name='email' placeholder='   Password' type='email'></input>
                <button type='submit' className='signInBtn' onClick={() => history("/welcome")}>Sign In </button>
                <p>Forgot Password?</p>
                <div className='seperator'> </div>
                <div className='signGoogle'>
                    <p>
                        Or sign in with 
                    </p> 
                    <button type='button' className='googleImage'>
                        <img src={google} alt="" width={29}/>
                    </button>
                </div>
                <button type='button' className='signUpBtn'>Sign Up </button>
            </div>
        </div>
    </div>
  )
}

export default Login