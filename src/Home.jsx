import React, { useState } from 'react'
// importing images for donut 1
import badminton from "./green/badminton.svg";
import barbell from "./green/Barbell.svg";
import basketballball from "./green/basketballball.png";
import bowling from "./green/bowling.png";
import chess from "./green/chess.svg";
import fight from "./green/fight.svg";
import football from "./green/football.svg";
import golf from "./green/golf.svg";
import gymnast from "./green/gymnast.png";
import mountainClimb from "./green/mountain-climb.png";
import pingPong from "./green/ping-pong.svg";
import reshot from "./green/reshot.svg";
import runningRun from "./green/running-run.png";
import skate from "./green/skate.svg";
import skateboard from "./green/skateboard.svg";
import swimming from "./green/swimming.png";
import tennis from "./green/tennis.png";
import volleyball from "./green/volleyball.png";
import billiard from "./green/billiard.png";
// importing images for donut 2
import actor from "./purple/actor.svg";
import cooking from "./purple/cooking.svg";
import desktopPc from "./purple/desktop-pc.svg";
import graphicDesign from "./purple/graphic-design.svg";
import lollipop from "./purple/lollipop.svg";
import movie from "./purple/movie-clapper-open.svg";
import musicalsixteenthnote from "./purple/musicalsixteenthnote.svg";
import photo from "./purple/photo-camera.svg";
import robot from "./purple/robot-ai.svg";
import photoshopp from "./purple/photoshopp.svg";
// importing images for donut 3
import cafe from "./blue/cafe.svg";
import kitchen from "./blue/kitchen-pack-restaurant.svg";
import popcorn from "./blue/popcorn.svg";
import safety from "./blue/safety.svg";
import swimmingpool from "./blue/swimmingpool.svg";
import theater from "./blue/theater-cinema.svg";
import tour from "./blue/tour.svg";
import travel from "./blue/travel.png";
import { Link } from 'react-router-dom';
import badmintonsvg from './images/badminton.webp'
import { ImageData,ImageData2, ImageData3,ImageData4} from './JsonData';
import Sliderhome from './Sliderhome';
import kids from "./images/kids.jpeg"
// ----------
const Logos = (items) =>{
  return(
    <>
    <div className="logos">
          <Link to={items.url}><img src={items.image} alt={items.name} /></Link>
          <Link to={items.url} className='logos-names'><div className="logos-names">
            <h1>{items.name}</h1>
            <p>{items.details}
            </p>
          </div></Link>
        </div>
    </>
  )
}

const Home = (() => {
  const [cat, setcat] = useState(0)
  return (
    <div>

    <div className="categories">
      <h1 onClick={() => setcat(0)}>ورزش ها</h1>
      <h1 onClick={() => setcat(1)}>تفریحات</h1>
      <h1 onClick={() => setcat(2)}>مکان ها</h1>
    </div>
    <div className='logos-area' style={{display: cat  === 0 ? "flex" : "none"}}>
    <Logos image={badminton} name="بدمینتون" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={barbell} name="بدن سازی" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={basketballball} name="بسکتبال"details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={bowling} name="بولینگ" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={chess} name="شطرنج" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={fight} name="رزمی" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={football} name="فوتبال" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={golf} name="گلف" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={gymnast} name="ژیمناستیک" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={mountainClimb} name="کوه نوردی" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={pingPong} name="پینگ پنگ" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={reshot} name="تیر و کمان" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={runningRun} name="دو میدانی" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={skate} name="اسکیت" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={skateboard} name="اسکیت برد" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={swimming} name="شنا" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={tennis} name="تنیس" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={volleyball} name="والیبال" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={billiard} name="بیلیارد" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
    </div>
    <div className='logos-area' style={{display: cat  === 1 ? "flex" : "none"}}>
    <Logos image={actor} name="بازیگری" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={cooking} name="آشپزی" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={desktopPc} name="کامپیوتر" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={graphicDesign} name="دیزاین" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={lollipop} name="شیرینی پزی" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={movie} name="فیلمبرداری" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={musicalsixteenthnote} name="موزیکال" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={photo} name="عکاسی" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={robot} name="رباتیک" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
              <Logos image={photoshopp} name="فتوشاپ" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
    </div>
    <div className='logos-area' style={{display: cat  === 2 ? "flex" : "none"}}>
    <Logos image={cafe} name="کافه" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
            <Logos image={kitchen} name="رستوران" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
            <Logos image={popcorn} name="تئاتر" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
            <Logos image={safety} name="اسکیپ روم" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
            <Logos image={swimmingpool} name="پارک آبی" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
            <Logos image={theater} name="سینما" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
            <Logos image={tour} name="تور" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
            <Logos image={travel} name="گردشگری" details="ورزش بدمینتون (به انگلیسی: Badminton) ورزشی است که با توپ پردار" url={"/badminton"}></Logos>
    </div>
    <div className="detailbox">
      <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف</p>
    </div>
    </div>
    
  )
})


export default Home