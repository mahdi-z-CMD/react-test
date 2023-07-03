import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import starsvg from './star.svg'
const ImageSliderAuto = (props) => {
    const SliderProperty = {
        ImageNo: '',
        ImageName: '',
        ImageSrc: ''
    }

    const [sliderProperty, setSliderProperty] = useState(SliderProperty);

    const { ImageNo, ImageName, ImageSrc } = sliderProperty;

    const [count, setCount] = useState(0);


    const [animationCls, setAnimationCls] = useState('displayBlock fade');



    const NextClick = () => {

        setAnimationCls(() => ('displayNone fade'));
        const myTimeout = setTimeout(() => {
            setAnimationCls('displayBlock fade')
        }, 100);

        if (count <= props.ImageData.length-1) {
            setCount(count+1);
        }

        if (count === props.ImageData.length-1) {
            setCount(0);
        }

    };

    useEffect(() => {

        setSliderProperty((previous) => ({ ...previous, ImageNo: props.ImageData[count].ImageNo, ImageName: props.ImageData[count].ImageName, ImageSrc: props.ImageData[count].ImageSrc }));

    }, [count]);



    useEffect(() => {

         const interval=  setInterval(() => {

            NextClick();

        }, props.SlideInterValTime);

        return () => clearInterval(interval);

    }, [count]);


    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };
    return (
        <>
            <div className='slideshow-container'>
                <div className={animationCls}>
                    <div className="numbertext">{ImageNo}</div>
                    <img src={ImageSrc} className='img1' alt="Img" />
                </div>
                <div className="matn">
      <div className='emtiaz'>
          <h1>{props.name}</h1>
          <h2><h3 className='viewss'>بازدید : {props.views}</h3> {props.point} <img src={starsvg} alt="star" /> </h2>
          <h1>قیمت : {props.price}</h1>
      </div>
      <p>{props.detail1}
        {isExpanded ? (
          <span>{props.detail2}
          </span>
        ) : (
          <span id="dots">...</span>
        )}
      </p>
        <button onClick={toggleExpanded}>
        {isExpanded ? 'بستن' : 'ادامه'}
      </button>
      <Link to={props.url} className='emtiaz-btn'><button>
        ثبت نام
      </button></Link>
    </div>
              
            </div>


        </>

    );
};

export default ImageSliderAuto;