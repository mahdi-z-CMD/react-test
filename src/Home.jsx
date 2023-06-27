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
// ----------


const Home = (() => {
    const [show_image, setshow_image] = useState(badminton);
    const [show_name, setshow_name] = useState('بدمینتون');
    function change(x,y) {
        setshow_image(x);
        setshow_name(y);
    }
  return (
    <div>
        <h1 className="khas">تابستون خاص برای آدم های خاص</h1>
    <p className="texts"><img width="3%" height="3%" src={show_image} alt="badminton" class="texts"/>{show_name}</p>
        <div className="donut">
            <Link to='./Badminton'><a href="#1" className="logos-main logo1"><img width="12%" height="12%" src={badminton} alt="badminton" onMouseOver={() => {change(badminton,'بدمینتون')}}/></a></Link>
            <a href="#2" className="logos-main logo2"><img width="16%" height="16%" src={barbell} alt="barbell" onMouseOver={() => {change(barbell,'بدن سازی')}}/></a>
            <a href="#3" className="logos-main logo3"><img width="12%" height="12%" src={basketballball} alt="basketball" onMouseOver={() => {change(basketballball,'بسکتبال')}}/></a>
            <a href="#4" className="logos-main logo4"><img width="12%" height="12%" src={bowling} alt="bowling" onMouseOver={() => {change(bowling,'بولینگ')}}/></a>
            <a href="#5" className="logos-main logo5"><img width="12%" height="12%" src={chess} alt="chess" onMouseOver={() => {change(chess,'شطرنج')}}/></a>
            <a href="#6" className="logos-main logo6"><img width="12%" height="12%" src={fight} alt="fight" onMouseOver={() => {change(fight,'رزمی')}}/></a>
            <a href="#7" className="logos-main logo7"><img width="12%" height="12%" src={football} alt="football" onMouseOver={() => {change(football,'فوتبال')}}/></a>
            <a href="#8" className="logos-main logo8"><img width="12%" height="12%" src={golf} alt="golf" onMouseOver={() => {change(golf,'گلف')}}/></a>
            <a href="#9" className="logos-main logo9"><img width="12%" height="12%" src={gymnast} alt="gymnastic" onMouseOver={() => {change(gymnast,'ژیمناستیک')}}/></a>
            <a href="#10" className="logos-main logo10"><img width="12%" height="12%" src={mountainClimb} alt="mountain-climb" onMouseOver={() => {change(mountainClimb,'کوه نوردی')}}/></a>
            <a href="#11" className="logos-main logo11"><img width="12%" height="12%" src={pingPong} alt="ping-pong" onMouseOver={() => {change(pingPong,'پینگ پنگ')}}/></a>
            <a href="#12" className="logos-main logo12"><img width="12%" height="12%" src={reshot} alt="shot" onMouseOver={() => {change(reshot,'تیر و کمان')}}/></a>
            <a href="#13" className="logos-main logo13"><img width="12%" height="12%" src={runningRun} alt="running-run" onMouseOver={() => {change(runningRun,'دو میدانی')}}/></a>
            <a href="#14" className="logos-main logo14"><img width="12%" height="12%" src={skate} alt="skate" onMouseOver={() => {change(skate,'اسکیت')}}/></a>
            <a href="#15" className="logos-main logo15"><img width="12%" height="12%" src={skateboard} alt="skateboard" onMouseOver={() => {change(skateboard,'اسکیت برد')}}/></a>
            <a href="#16" className="logos-main logo16"><img width="12%" height="12%" src={swimming} alt="swimming" onMouseOver={() => {change(swimming,'شنا')}}/></a>
            <a href="#17" className="logos-main logo17"><img width="12%" height="12%" src={tennis} alt="tennis" onMouseOver={() => {change(tennis,'تنیس')}}/></a>
            <a href="#18" className="logos-main logo18"><img width="12%" height="12%" src={volleyball} alt="volleyball" onMouseOver={() => {change(volleyball,'والیبال')}}/></a>
            <a href="#19" className="logos-main logo19"><img width="12%" height="12%" src={billiard} alt="billiard" onMouseOver={() => {change(billiard,'بیلیارد')}}/></a>
        </div>
        <div className="donut2">
            <a href="#20" className="logos-main logo20"><img width="40%" height="60%" src={actor} alt="actor" onMouseOver={() => {change(actor,'بازیگری')}}/></a>
            <a href="#21" className="logos-main logo21"><img width="40%" height="60%" src={cooking} alt="cooking" onMouseOver={() => {change(cooking,'آشپزی')}}/></a>
            <a href="#22" className="logos-main logo22"><img width="40%" height="60%" src={desktopPc} alt="desktop-pc" onMouseOver={() => {change(desktopPc,'کامپیوتر')}}/></a>
            <a href="#23" className="logos-main logo23"><img width="40%" height="60%" src={graphicDesign} alt="graphic-design" onMouseOver={() => {change(graphicDesign,'دیزاین')}}/></a>
            <a href="#24" className="logos-main logo24"><img width="40%" height="60%" src={lollipop} alt="lollipop" onMouseOver={() => {change(lollipop,'شیرینی پزی')}}/></a>
            <a href="#25" className="logos-main logo25"><img width="40%" height="60%" src={movie} alt="movie-clapper-open" onMouseOver={() => {change(movie,'فیلمبرداری')}}/></a>
            <a href="#26" className="logos-main logo26"><img width="40%" height="60%" src={musicalsixteenthnote} alt="musical-sixteenth-note" onMouseOver={() => {change(musicalsixteenthnote,'موزیکال')}}/></a>
            <a href="#27" className="logos-main logo27"><img width="40%" height="60%" src={photo} alt="photo-camera" onMouseOver={() => {change(photo,'عکاسی')}}/></a>
            <a href="#28" className="logos-main logo28"><img width="40%" height="60%" src={robot} alt="robot-ai" onMouseOver={() => {change(robot,'رباتیک')}}/></a>
            <a href="#29" className="logos-main logo37"><img width="40%" height="60%" src={photoshopp} alt="photoshop" onMouseOver={() => {change(photoshopp,'فتوشاپ')}}/></a>
            
        </div>
        <div className="donut3">
            <a href="#30" className="logos-main logo29"><img width="35%" height="55%" src={cafe} alt="cafe" onMouseOver={() => {change(cafe,'کافه')}}/></a>
            <a href="#31" className="logos-main logo30"><img width="35%" height="55%" src={kitchen} alt="kitchen-pack-restaurant" onMouseOver={() => {change(kitchen,'رستوران')}}/></a>
            <a href="#32" className="logos-main logo31"><img width="35%" height="55%" src={popcorn} alt="popcorn" onMouseOver={() => {change(popcorn,'تئاتر')}}/></a>
            <a href="#33" className="logos-main logo32"><img width="35%" height="55%" src={safety} alt="scape-room" onMouseOver={() => {change(safety,'اسکیپ روم')}}/></a>
            <a href="#34" className="logos-main logo33"><img width="35%" height="55%" src={swimmingpool} alt="swimming-pool" onMouseOver={() => {change(swimmingpool,'پارک آبی')}}/></a>
            <a href="#35" className="logos-main logo34"><img width="35%" height="55%" src={theater} alt="theater-cinema" onMouseOver={() => {change(theater,'سینما')}}/></a>
            <a href="#36" className="logos-main logo35"><img width="35%" height="55%" src={tour} alt="tour" onMouseOver={() => {change(tour,'تور')}}/></a>
            <a href="#37" className="logos-main logo36"><img width="35%" height="55%" src={travel} alt="travel" onMouseOver={() => {change(travel,'گردشگری')}}/></a>
        </div>
    <div className="line1">
        <p className="text1">عجب تابستونیه</p>
        <p className="text22">حوصله سر رفتن تعطیله</p>
    </div>
    <div className="line2">
        <p className="text33">من عاشق تابستونم</p>
        <p className="text44">بزن بریم</p>
    </div>
    <div className="line3">
        <p className="text55">!!بریم بترکونیم</p>
    </div>
    </div>
  )
})


export default Home