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
import Projects from './components/Projects';


function App() {
  const [showDp, setShowDp] = useState(false);
  const codesIMG = {"type":"codes.jpg"}

  

  const HeaderContainer = {
    position:'relative', zIndex:'8', backgroundColor:'rgba(255, 255, 255, 0.5)', width:'100%', 
    WebkitBackdropFilter:'blur(5px)', backdropFilter:'blur(7px)', top:'0' 
}  
  const MainStyle = {
    backgroundColor:'', width:'100%', height:'100%', width:'100%', position:'relative', 
    top:'50px', padding:'5px 0'
  }
  const RightStyle = {
    backgroundColor:'', height:'100vh', overflowY:'hidden',
    position:'relative', position:'relative',
  }
  const leftContainerStyle = {height:'100vh',}
  const leftSideStyle = { 
    position:'relative', width:'100%', height:'100%',backgroundSize:'cover', 
    backgroundPosition:'center',  backgroundImage:`url(${codesIMG.type})`,
    }
  

  useEffect(()=> {
    
  },[])

  return (
    <>
    <div>
    {/* welcome page positioned absolute from welcome component */}
    <Welcome/>
   </div>

    <div className='g-0  position-relative'>
  
    {/*header area */}
    <section className='position-fixed' id='header' style={HeaderContainer}> 
    <NavContainer setShowDp={setShowDp}/> 
    <ProfileDp showDp={showDp}/>     
    </section>

    {/*main body section which is divided into two sub sections "Right and Left"*/}
    <section onClick={()=> setShowDp(false)} className='row g-0 my-1' style={MainStyle}>
    <div /* Left section*/  className='col-lg-8 col-md-7' style={leftContainerStyle}>
     <div id='leftSide' style={leftSideStyle}>
      <Slides/>
       {/* Projects */}
      <div style={{position:'relative', zIndex:'6', width:'100%'}}>
        <div className='ProjectCards'>
        <Projects/>
        </div>
      </div>
     </div>
     </div>
     <div className='col-lg-4 col-md-5 text-light d-none d-md-block' style={RightStyle}>
        <SideRight/>
     </div>
    </section> 
    
   </div>
    </>
  )
}

export default App
