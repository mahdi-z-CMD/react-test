import React from 'react'
import Navbar from './Navbar'
import "./style-contact.css"
import callsvg from "./call.svg"
import mailsvg from "./mail.svg"
import locationsvg from "./location.svg"
const Contactus = (() => {
  return (
    <>
    <Navbar></Navbar>
    <div className='contactus'>
        <img className='cu-img' src={"https://media.istockphoto.com/id/1365543480/video/contact-us-concept.jpg?s=640x640&k=20&c=G16GzQ4uJKlITww2ArmKNB9UKb1-IT2eyJrUxkUmAIY="} alt="contactus" />
        <div className='cu-list'>
            <h1><img src={locationsvg} alt="call" width="5%"/> آدرس : خیابان جمشیدیه</h1>
            <h1><img src={callsvg} alt="call" width="5%"/> شماره تلفن : 09129999999</h1>
            <h1><img src={mailsvg} alt="call" width="5%"/> ایمیل سازمانی : something@gmail.com</h1>
        </div>
    </div>
    </>
  )
})

export default Contactus