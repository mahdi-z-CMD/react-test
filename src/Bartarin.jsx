import React from 'react'
import Navbar from './Navbar'
import "./style-bartarin.css"
import badminton from "./green/badminton.svg";
import basketballball from "./green/basketballball.png";
const persons = [
    {
        name: "آرش",
        rotbe: 1,
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        name: "علی",
        rotbe: 5,
        img: "https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
    },
    {
        name: "محمد",
        rotbe: 2,
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
    },
    {
        name: "مملی",
        rotbe: 4,
        img: "https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png"
    },
    {
        name: "مهدی",
        rotbe: 10,
        img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
    },
    {
        name: "حسن",
        rotbe: 6,
        img: "https://www.choosingtherapy.com/wp-content/uploads/2021/11/Dr-Tanveer-Ahmed.jpg"
    },
    {
        name: "جویا",
        rotbe: 8,
        img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
    },
]
var byrotbe = persons.slice(0);
byrotbe.sort(function(a,b) {
    return a.rotbe - b.rotbe;
    
});
const Boards = (person) =>{
    return(
        <div className='person-section'>
        <h1 className='person-rotbe'>{person.rotbe}</h1>
            <img className='person-img' src={person.img} alt="person" />
            <h1 className='person-name'>{person.name}</h1>
        </div>
    )
}
const Bartarin = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className='bests-section'>
        <div className='bests'>
        <div className='name-varzesh'>
                <h1 >ورزش : بدمینتون</h1>
                <img src={badminton} alt="badminton"/>
            </div>
            {byrotbe.map((p) => {
                return(
                    <>
                    <Boards rotbe={p.rotbe} img={p.img} name={p.name}></Boards>
                    </>
                )
            })}
        </div>
        </div>
        <div className='bests-section'>
        <div className='bests'>
            <div className='name-varzesh'>
                <h1 >ورزش : بسکتبال</h1>
                <img src={basketballball} alt="badminton"/>
            </div>
            {byrotbe.map((p) => {
                return(
                    <>
                    <Boards rotbe={p.rotbe} img={p.img} name={p.name}></Boards>
                    </>
                )
            })}
        </div>
        </div>
    </div>
  )
}

export default Bartarin