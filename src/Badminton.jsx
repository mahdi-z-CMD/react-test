import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import badmintonsvg from './images/badminton.webp'
import ImageSliderAuto from './ImageSliderAuto';
import { ImageData,ImageData2, ImageData3,ImageData4} from './JsonData';
import searchsvg from './search.svg'
const Badminton = () =>{
  const [userlocx, setuserlocx] = useState(35.7304056);
  const [userlocy, setuserlocy] = useState(51.403759);
  const [shahr, setshahr] = useState("all");
  const [filter, setfilter] = useState("none");
  const [searching, setsearching] = useState();
  function handleChange(event){
    setshahr(event.target.value)
}
  function handleChange2(event){
    setfilter(event.target.value)
  }
  function haversine_distance(mk1x , mk1y, mk2x, mk2y) {
    var R = 3958.8; // Radius of the Earth in miles
    var rlat1 = mk1x * (Math.PI/180); // Convert degrees to radians
    var rlat2 = mk2x * (Math.PI/180); // Convert degrees to radians
    var difflat = rlat2-rlat1; // Radian difference (latitudes)
    var difflon = (mk2y-mk1y) * (Math.PI/180); // Radian difference (longitudes)

    var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
    return d;
}
  // yousef abad
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

function showPosition(position) {
  if (position.coords.longitude) {
    setuserlocx(position.coords.longitude)
    setuserlocy(position.coords.latitude)
  }
}
  const places = {
      loc : {
          locx : 35.7390951,
          locy : 51.3916578,
      },
      loc2 : {
          locx : 35.7336136,
          locy : 51.3757392,
      },
      loc3 : {
          locx : 35.7570412,
          locy : 51.3763442,
      },
      loc4 : {
          locx : 35.7355087,
          locy : 51.4673725,
      },
      loc5 : {
          locx : 35.7268036,
          locy : 51.4506625,
      },
      loc6 : {
          locx : 35.7920444,
          locy : 51.5038362,
      },
      loc7 : {
        locx : 35.7920444,
        locy : 51.5038362,
    },
  }
    const places2 = [
    {
        name: " آباد",
        detail: "اَقْدَسیه، یکی از محله‌های اعیان‌نشین شمال تهران و منطقه شمیران است. این محله در منطقه ۱ شهرداری تهران و شهرستان شمیرانات واقع است.",
        detail2: "خیابان اقدسیه (برادران شهید موحد دانش) در شرق از میدان اقدسیه در انتهای بزرگراه ارتش آغاز شده، در میانه راه خیابان آجودانیه را قطع می‌کند و در غربی‌ترین نقطه به سه‌راه اقدسیه",
        img: ImageData,
        price: 250.000,
        score: 3.5,
        views: 298,
        city: "tehran",
        url: '/Aghdasie',
        result: haversine_distance(userlocx,userlocy,places.loc.locx ,places.loc.locy),
    },
    {
      name: "گیشا",
      detail: "اَقْدَسیه، یکی از محله‌های اعیان‌نشین شمال تهران و منطقه شمیران است. این محله در منطقه ۱ شهرداری تهران و شهرستان شمیرانات واقع است.",
      detail2: "خیابان اقدسیه (برادران شهید موحد دانش) در شرق از میدان اقدسیه در انتهای بزرگراه ارتش آغاز شده، در میانه راه خیابان آجودانیه را قطع می‌کند و در غربی‌ترین نقطه به سه‌راه اقدسیه",
      img: ImageData2,
      price: 350.000,
        score: 4.5,
        views: 378,
        city: "tehran",
        url: "/Aghdasie",
        result: haversine_distance(userlocx,userlocy,places.loc3.locx ,places.loc3.locy),
    },
    {
      name: "شهرک غرب",
      detail: "اَقْدَسیه، یکی از محله‌های اعیان‌نشین شمال تهران و منطقه شمیران است. این محله در منطقه ۱ شهرداری تهران و شهرستان شمیرانات واقع است.",
      detail2: "خیابان اقدسیه (برادران شهید موحد دانش) در شرق از میدان اقدسیه در انتهای بزرگراه ارتش آغاز شده، در میانه راه خیابان آجودانیه را قطع می‌کند و در غربی‌ترین نقطه به سه‌راه اقدسیه",
      img: ImageData3,
      price: 400.000,
        score: 2.5,
        views: 50,
        city: "tehran",
        url: "/Aghdasie",
        result: haversine_distance(userlocx,userlocy,places.loc2.locx ,places.loc2.locy),
    },
    {
      name: "مجیدیه",
      detail: "اَقْدَسیه، یکی از محله‌های اعیان‌نشین شمال تهران و منطقه شمیران است. این محله در منطقه ۱ شهرداری تهران و شهرستان شمیرانات واقع است.",
      detail2: "خیابان اقدسیه (برادران شهید موحد دانش) در شرق از میدان اقدسیه در انتهای بزرگراه ارتش آغاز شده، در میانه راه خیابان آجودانیه را قطع می‌کند و در غربی‌ترین نقطه به سه‌راه اقدسیه",
      img: ImageData4,
      price: 150.000,
        score: 2,
        views: 120,
        city: "ardebil",
        url: "/Aghdasie",
        result: haversine_distance(userlocx,userlocy,places.loc4.locx ,places.loc4.locy),
    },
    {
      name: "قصر",
      detail: "اَقْدَسیه، یکی از محله‌های اعیان‌نشین شمال تهران و منطقه شمیران است. این محله در منطقه ۱ شهرداری تهران و شهرستان شمیرانات واقع است.",
      detail2: "خیابان اقدسیه (برادران شهید موحد دانش) در شرق از میدان اقدسیه در انتهای بزرگراه ارتش آغاز شده، در میانه راه خیابان آجودانیه را قطع می‌کند و در غربی‌ترین نقطه به سه‌راه اقدسیه",
      img: ImageData,
      price: 250.000,
        score: 3.5,
        views: 19,
        city: "azargharbi",
        url: "/Aghdasie",
        result: haversine_distance(userlocx,userlocy,places.loc5.locx ,places.loc5.locy),
    },
    {
      name: "ازگل",
      detail: "اَقْدَسیه، یکی از محله‌های اعیان‌نشین شمال تهران و منطقه شمیران است. این محله در منطقه ۱ شهرداری تهران و شهرستان شمیرانات واقع است.",
      detail2: "خیابان اقدسیه (برادران شهید موحد دانش) در شرق از میدان اقدسیه در انتهای بزرگراه ارتش آغاز شده، در میانه راه خیابان آجودانیه را قطع می‌کند و در غربی‌ترین نقطه به سه‌راه اقدسیه",
      img: ImageData2,
      price: 230.000,
        score: 1.5,
        views: 298,
        city: "azargharbi",
        url: "/Aghdasie",
        result: haversine_distance(userlocx,userlocy,places.loc6.locx ,places.loc6.locy),
    },
    {
      name: "قیطریه",
      detail: "اَقْدَسیه، یکی از محله‌های اعیان‌نشین شمال تهران و منطقه شمیران است. این محله در منطقه ۱ شهرداری تهران و شهرستان شمیرانات واقع است.",
      detail2: "خیابان اقدسیه (برادران شهید موحد دانش) در شرق از میدان اقدسیه در انتهای بزرگراه ارتش آغاز شده، در میانه راه خیابان آجودانیه را قطع می‌کند و در غربی‌ترین نقطه به سه‌راه اقدسیه",
      img: ImageData2,
      price: 740.000,
        score: 5.0,
        views: 900,
        city: "tehran",
        url: "/Aghdasie",
        result: haversine_distance(userlocx,userlocy,places.loc7.locx ,places.loc7.locy),
    },
]
   
var byDate = places2.slice(0);
byDate.sort(function(a,b) {
    return a.result - b.result;
    
});
    const Show_near = () =>{
      return (
        <div className='singin'>
          {byDate.map((p) => {
            // sort by balatarin score
            function sort_scoreb() {
              byDate.sort(function(a,b) {
                return b.score - a.score;
                });
            }
            // sort by paein tarin score
            function sort_scorep() {
              byDate.sort(function(a,b) {
                return a.score - b.score;
                });
            }
             // sort by balatarin view 
             function sort_viewb() {
              byDate.sort(function(a,b) {
                return b.views - a.views;
                });
            }
            // sort by paeintarin view
            function sort_viewp() {
              byDate.sort(function(a,b) {
                return a.views - b.views;
                });
            }
            // sort by balatarin price
            function sort_priceb() {
              byDate.sort(function(a,b) {
                return b.price - a.price;
                });
            }
            // sort by paeintarin price
            function sort_pricep() {
              byDate.sort(function(a,b) {
                return a.price - b.price;
                });
            }
            if (shahr == "all") {
              if (true) {
                if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }
              }
            }else if(shahr == "tehran"){ // next if
              if (p.city == "tehran") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }
              }
            }else if(shahr == "azargharbi"){ // next if
              if (p.city == "azargharbi") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                } 
              }
            }else if(shahr == "ardebil"){ // next if
              if (p.city == "ardebil") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                } 
              }
            }else if(shahr == "esfahan"){ // next if
              if (p.city == "esfahan") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }
              }
            }else if(shahr == "alborz"){ // next if
              if (p.city == "alborz") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }
              }
            }else if(shahr == "ilam"){ // next if
              if (p.city == "ilam") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }
              }
            }else if(shahr == "boshahr"){ // next if
              if (p.city == "boshahr") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }
              }
            }else if(shahr == "chaharmahal"){ // next if
              if (p.city == "chaharmahal") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                } 
              }
            }else if(shahr == "khorasanjoboni"){ // next if
              if (p.city == "khorasanjoboni") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                } 
              }
            }else if(shahr == "khorasanrazavi"){ // next if
              if (p.city == "khorasanrazavi") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }
              }
            }else if(shahr == "khorsanashomali"){ // next if
              if (p.city == "khorsanashomali") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }
              }
            }else if(shahr == "khozestan"){ // next if
              if (p.city == "khozestan") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                } 
              }
            }else if(shahr == "zanjan"){ // next if
              if (p.city == "zanjan") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                } 
              }
            }else if(shahr == "semnan"){ // next if
              if (p.city == "semnan") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                } 
              }
            }else if(shahr == "sistan"){ // next if
              if (p.city == "sistan") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                } 
              }
            }else if(shahr == "fars"){ // next if
              if (p.city == "fars") {
                if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }
              }
            }else if(shahr == "ghazvin"){ // next if
              if (p.city == "ghazvin") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                } 
              }
            }else if(shahr == "ghom"){ // next if
              if (p.city == "ghom") {
                if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }
              }
            }else if(shahr == "kerman"){ // next if
              if (p.city == "kerman") {
                if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }
              }
            }else if(shahr == "kermanshah"){ // next if
              if (p.city == "kermanshah") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }
              }
            }else if(shahr == "ahmad"){ // next if
              if (p.city == "ahmad") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                } 
              }
            }else if(shahr == "golestan"){ // next if
              if (p.city == "golestan") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                } 
              }
            }else if(shahr == "gilan"){ // next if
              if (p.city == "gilan") {
                if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }
              }
            }else if(shahr == "lorestan"){ // next if
              if (p.city == "lorestan") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }
              }
            }else if(shahr == "mazandaran"){ // next if
              if (p.city == "mazandaran") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }
              }
            }else if(shahr == "markazi"){ // next if
              if (p.city == "markazi") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                } 
              }
            }else if(shahr == "hormozgan"){ // next if
              if (p.city == "hormozgan") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                } 
              }
            }else if(shahr == "hamadan"){ // next if
              if (p.city == "hamadan") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                } 
              }
            }else if(shahr == "yazd"){ // next if
              if (p.city == "yazd") {
               if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                } 
              }
            }else{
              if (filter == "none") {
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scoreb"){
                  sort_scoreb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "scorep"){
                  sort_scorep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewb"){
                  sort_viewb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "viewp"){
                  sort_viewp()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "priceb"){
                  sort_priceb()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }else if(filter == "pricep"){
                  sort_pricep()
                  return(
                    <>
                    <ImageSliderAuto ImageData={p.img} name={p.name} detail1={p.detail} detail2={p.detail2} url={p.url} price={p.price} point={p.score} views={p.views} SlideInterValTime={ 3000}/>
                    </>
                  )
                }
            }
            
          })}
            </div>
      )

    }
    return(
        <>
        <Navbar></Navbar>
        <div class="sports">
        <div class="sport-box">
            <img width="35%" height="35%" src={badmintonsvg} alt="axs"/>
            <div class="sport-text">
                <h1 class="s-header" id="1"> بدمینتون</h1>
                <p>ریشه ورزش بدمینتون (به انگلیسی: Badminton) امروزی از کشور هندوستان آغاز شده‌است، از بازی‌ای که آن‌ها به نام «Poona» انجام می‌دادند. این بازی که رقابتی زیبا در هند بود توسط افسران ارتش انگلستان، از هندوستان به کشورشان انتقال داده شد.</p>
            </div>
            <hr />
        </div>
    </div>
    <div class="sort-area">
    <div class="search-container">
          <input type="text" placeholder="جستجو" onKeyDown={(e) =>{setsearching(e.target.value)}}></input>
          <img onClick={(e) =>{setsearching(e.target.value)}} src={searchsvg} className='isearch' />
      </div>
      <select name="فیلتر" class="filter" onChange={handleChange2}>
        <option value="none">نزدیک ترین</option>
        <option value="scoreb">بالاترین امتیاز</option>
        <option value="scorep">پایین تر امتیاز</option>
        <option value="viewb">بیشترین بازدید</option>
        <option value="viewp">کمترین بازدید</option>
        <option value="priceb">بیشترین قیمت</option>
        <option value="pricep">کمترین قیمت</option>
      </select>
      <select name="فیلتر" class="filter" onChange={handleChange}>
        <option value="all">همه شهر ها</option>
        <option value="azargharbi">آذربایجان غربی</option>
        <option value="ardebil">اردبیل</option>
        <option value="esfahan">اصفهان</option>
        <option value="alborz">البرز</option>
        <option value="ilam">ایلام</option>
        <option value="boshahr">بوشهر</option>
        <option value="tehran">تهران</option>
        <option value="chaharmahal">چهارمحال و بختیاری</option>
        <option value="khorasanjoboni">خراسان جنوبی</option>
        <option value="khorasanrazavi">خراسان رضوی</option>
        <option value="khorsanashomali">خراسان شمالی</option>
        <option value="khozestan">خوزستان</option>
        <option value="zanjan">زنجان</option>
        <option value="semnan">	سمنان</option>
        <option value="sistan">سیستان و بلوچستان</option>
        <option value="fars">فارس</option>
        <option value="ghazvin">قزوین</option>
        <option value="ghom">قم</option>
        <option value="kordestan">کردستان</option>
        <option value="kerman">کرمان</option>
        <option value="kermanshah">کرمانشاه</option>
        <option value="ahmad">کهگیلویه وبویراحمد</option>
        <option value="golestan">گلستان</option>
        <option value="gilan">گیلان</option>
        <option value="lorestan">لرستان</option>
        <option value="mazandaran">مازندران</option>
        <option value="markazi">مرکزی</option>
        <option value="hormozgan">هرمزگان</option>
        <option value="hamadan">همدان</option>
        <option value="yazd">یزد</option>
      </select>
     
    </div>
    <div className='singin'>
    <Show_near></Show_near>
        </div>
      
      </>
    )
}

export default Badminton;