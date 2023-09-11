import './App.css'
import {ImLocation2} from 'react-icons/im';
import NavContainer from './components/NavContainer';
import {BsFillTelephoneInboundFill, BsWhatsapp} from 'react-icons/bs';
import {FaReact, FaFigma, FaBootstrap, FaHtml5, FaCss3} from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di';
import {SiMui, SiRedux, SiTailwindcss} from 'react-icons/si';
import SideRight from './SideRight';
import Slides from './components/Slides';
import ProfileDp from './components/ProfileDp';
import { useEffect, useState } from 'react';
import Welcome from './components/Welcome';


function App() {
  const [showDp, setShowDp] = useState(false);
  const codesIMG = {"type":"codes.jpg"}

  
  const MainStyle = {
    backgroundColor:'rgb(21, 21, 46)',
  }
  const RightStyle = {
    backgroundColor:'rgb(21, 21, 46)', height:'100vh', overflowY:'auto',
  }
  const leftContainerStyle = {}
  const leftSideStyle = { 
    position:'relative', width:'100%', height:'100vh',backgroundSize:'cover', 
    backgroundPosition:'center',  backgroundImage:`url(${codesIMG.type})`,
    }
  

  useEffect(()=> {
    
  },[])

  return (
    <>
    
    <div className='g-0 pt-2 position-relative'>
    
     <div>
      {/* welcome page positioned absolute from welcome component */}
     <Welcome/>
     </div>
    {/*header area */}
    <section id='header' style={{position:'relative', }}> 
    <NavContainer setShowDp={setShowDp}/> 
    <ProfileDp showDp={showDp}/>     
    </section>

    {/*main body section which is divided into two sub sections "Right and Left"*/}
    <section onClick={()=> setShowDp(false)} className='row g-0 my-1' style={MainStyle}>
    <div /* Left section*/  className='col-lg-8 col-sm-7 h1' style={leftContainerStyle}>
     <div id='leftSide' style={leftSideStyle}>
      <Slides/>
     </div>
     </div>

     <div id='rightContainer' className='col-lg-4 col-sm-5 py-3 px-3 text-light' style={RightStyle}>
        <SideRight/>
     </div>
    </section> 
    
   </div>
    </>
  )
}

export default App
