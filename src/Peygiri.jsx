import React, { useState } from 'react';
import './style-peygiri.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Peygiri() {
  return (
    <>
    <Navbar></Navbar>
    <h1 className='peygirih1'>پیگیری ثبت نام</h1>
    <div className="peygiriform">
        <div className="formpey">
            <label htmlFor="">نام و نام خانوادگی</label>
            <input type="text" name="name" id="khanevadei" />
            <label htmlFor="">کدملی</label>
            <input type="text" name="name" id="khanevadei" />
            <button type="submit">تایید</button>
        </div>
    </div>
    </>
  );
}

export default Peygiri;