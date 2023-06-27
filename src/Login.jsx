import React from 'react'
import './login.css'
import Navbar from './Navbar'
const Login = () => {
  return (
    <>
        <Navbar></Navbar>
        <div class="container">
        <a href="#" class="nav-logo">LOGO</a>
  <h2 className='h22'>ورود به وبسایت</h2>
    <form>
        <div class="inputArea">
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password"/>
        </div>
        <button class="loginBtn" type="submit">ورود</button>
    </form>
    </div>
    </>
  )
}

export default Login;