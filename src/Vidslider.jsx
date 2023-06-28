import { useState  } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video1 from "./images/Forest stream in the sunlight - Free Stock Video.mp4";
import video2 from "./images/Going down a curved highway through a mountain range - Free Stock Video.mp4";
import { Link } from 'react-router-dom';


const Vidslider = (propsvid) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [videos, setVideos] = useState([
    {
      id: 1,
      video: video1,
    },
    {
      id: 2,
      video: video2,
    },
  ]);
  
  
      return (
       <>
       <Slider
  autoplay={true}
  autoplaySpeed={3000}
  dots={false}
  infinite={true}
  speed={500}
  slidesToShow={1}
  slidesToScroll={1}
  responsive={[
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ]}
>
  {videos.map((video) => (
    <div key={video.id}>
      <video src={video.video} autoPlay={true} muted={true} loop={true} />
    </div>
  ))}
</Slider>
<div class="details">
        <h1 onClick={() => setSlideIndex(1)}>آدرس</h1>
        <h1 onClick={() => setSlideIndex(2)}>نظرات</h1>
        <h1 onClick={() => setSlideIndex(3)}>قیمت</h1>
        <h1 onClick={() => setSlideIndex(4)}>امکانات</h1>
        <h1 onClick={() => setSlideIndex(5)}>توضیحات</h1>
    </div>
<div class="slideshow-containerr">
        <div class="mySlides" style={{display: slideIndex  === 1 ? "block" : "none"}}>
            <p>{propsvid.addres}</p>
        </div>
        <div class="mySlides" style={{display: slideIndex === 2 ? "block" : "none"}}>
            <p>{propsvid.nazarat}</p>
        </div>
        <div class="mySlides" style={{display: slideIndex === 3 ? "block" : "none"}}>
            <p>{propsvid.price}</p>
        </div>
        <div class="mySlides" style={{display: slideIndex === 4 ? "block" : "none"}}>
            <p>{propsvid.emkanat}</p>
        </div>
        <div class="mySlides" style={{display: slideIndex === 5 ? "block" : "none"}}>
            <p>{propsvid.tozihat}</p>
        </div>
    </div>
    <div class="login-area">
      <Link to='./Singin' className='lgn'>بریم باهم ثبت نام کنیم</Link>
    </div>
       </>
      );
} 
export default Vidslider;