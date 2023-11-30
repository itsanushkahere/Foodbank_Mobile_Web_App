import React from 'react'
import FrokAndSpoon from '../assets/forkandspoon.jpg';
import FoodDiscount from '../assets/fooddiscount.jpg';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const navigate=useNavigate();
    const handleLogin=()=>{
        navigate("/home");
    }
  return (
    <div className='loginMain'>
        <div className='loginHeader'>
            <div >
                <img className='appLogo' src={FrokAndSpoon} alt='Applogo'/>;
            </div>
            <div className="appTitle"><b>Food Bank</b></div>
            <div className="appDesc">Special and Delicious Food</div>
        </div>
        <div className='middleChild'>
            <div className='loginBtn' onClick={handleLogin}><b>Log In</b></div>
            <div className='signUpBtn'><b>Sign Up</b></div>
        </div>
        <div className='loginFooter'>
            <img className="footerImg" src={FoodDiscount} alt='Discount Image'/>
        </div>
    </div>
  )
}

export default Login