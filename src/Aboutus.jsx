import React from 'react'
import Navbar from './Navbar'

const Aboutus = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className='contactus'>
        <img className='cu-img' src={"https://media.istockphoto.com/id/1365543480/video/contact-us-concept.jpg?s=640x640&k=20&c=G16GzQ4uJKlITww2ArmKNB9UKb1-IT2eyJrUxkUmAIY="} alt="contactus" />
        <div className='cu-list'>
            <h1>چرا فرزندم را اینجا ثبت نام کنم</h1>
            <p>به سراغ پدر دانش آموزی که از ثبت نام نشدن فرزندش عصبانی بود، می روم و مشکل عدم ثبت نام را جویا می شوم، او به خبرنگار شبستان می گوید:«فرزندم در یک مدرسه غیردولتی تحصیل می کرد، امسال می خواهیم در مدرسه دولتی ثبت نام کنیم اما ثبت نامش نمی کنند و می گویند ظرفیت پُر است و نمی توانم این مسئله را قبول کنم چون مدرسه چند در از خانه ما فاصله دارد، نمی خواهم فرزندم را به مدرسه دورتر بفرستم، حتی مدرسه غیردولتی که فرزندم تحصیل می کرد هم نزدیک خانمان بود.»</p>
        </div>
    </div>
    </>
  )
}

export default Aboutus