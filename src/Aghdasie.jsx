import React, { useState } from 'react'
import Navbar from './Navbar'
import './style-place.css'
import Vidslider from './Vidslider';
import { Link } from 'react-router-dom';
const Aghdasie = (() => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    number: "",
    codemeli: "",
    address: "",
    city: "",
    age: "",
    gender: "",
  });
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "لطفا مقادیر را تکمیل کنید";
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // You can write your own code here to submit the form data
      console.log(formData);
    }
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <>
    <Navbar></Navbar>
         <Vidslider addres="آدرس: اقدسیه، جنب بازار صدف" nazarat="یکی دیگر از فست فود‌های اقدسیه فست فود اچینو است. منوی فست فود اچینو دارای انواع پیتزا و فست فود است که از طعم و مزه بی‌نظیری برخوردار است."
         price="اما پیشنهاد ویژه ما به شما پاستا جاسمینه است که از پاستا پنه به همراه گوشت استیک، قارچ و سس آلفردو تهیه شده است و طعم و مزه فوق‌العاده‌ای دارد. پیتزا‌های خانه پاستا هم تنوع زیادی دارد"
         emkanat="اگر به دنبال خوردن لذت ناب یک ساندویچ هستید به شما فست فود کریستال را پیشنهاد می‌کنیم. فست فود کریستال بهترین فست فود اقدسیه در فضایی دنج و آرام واقع شده است."
         tozihat="در این فست فود انواع ساندویچ و سوخاری به همراه پیتزا سرو می‌شود. کریستال میکس ساندویچ پیشنهادی ما به شماست که از ترکیب فیله مرغ، فیله گوشت، قارچ و پنیر به همراه سس مخصوص تشکیل شده است. این ساندویچ طعم بی‌نظیری دارد و از مواد اولیه سالم و باکیفیت تهیه شده است. فست فود کریستال پیتزا‌های بسیار لذیذی نیز دارد و دارای قیمت مناسبی است. بهترین کافه ونک را بشناسید."
         ></Vidslider>
      
    </>
  )
})

export default Aghdasie