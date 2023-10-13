import React, { useState } from 'react'
import Overlay from './components/overlay'
import {SlidesCard} from './components/SlidesCard';
import { Iframe } from './components/SlidesCard';
import {MdKeyboardBackspace, MdOpenWith} from 'react-icons/md';
import {AiOutlineMenuUnfold, AiOutlineMenuFold} from 'react-icons/ai'



const App = () => {

  const [showOverlay, setShowOverlay] = useState(true);
  const [picInfo, setPicInfo] = useState('');
  const [showSideBar, setSideBar] = useState(false);
  const [showNavBar, setNavBar] = useState(false);
  const [sharePicInfo, setsharePicInfo] = useState(0);
  const [mode, setMode] = useState(true);

  
 const darkMode = {color:'black', backgroundColor:'black'} 
 const LightMode = {color:'white', backgroundColor:'white'}
const showOverlayStyle = showOverlay === true? ({ transition:'ease-in 0.6s'}) : 
({ transform:'translateX(-105%)', position:'absolute', transition:'ease-out 0.6s',})
  const overlayStyles = () => ({
    ...showOverlayStyle, 
  })
  
  
  const navBarStyles = showNavBar? {zIndex:'0', top:'174px', backgroundColor:'rgba(0, 0, 0, 0.8)', height:'200px' ,
  position:'absolute',backdropFilter:'blur(10px)', left:'0px', display:'grid',
  transition:'0.8s', fontWeight:''}
   : { height:'0', transition:'ease-out 0.8s'}

    const introDp = {height:'70px', top:'0px', position:'absolute',
    overflow:'hidden', left:'0', cursor:'pointer' }
  const iframeBox = showSideBar ===true? 
  ({transform:'translateX(-30%)', height:'100%', transition:'0.8s'})  :
   ({width:'100%', height:'100%',  transition:'0.8s'})
   const navBarTriggerBtn = {
    position:'absolute', zIndex:'0', left:'0%', top:'80px', fontSize:'52px',
   cursor:'pointer', backgroundColor:'rgba(0, 0, 0, 0.8)', backdropFilter:'blur(10px)'
  }

  const handleSideBar = ()=> showSideBar? setSideBar(false, ) :
   setSideBar(true)
  

  

  return (
    <>
      <section /* WELCOME PAGE */ style={overlayStyles()}>
        <Overlay showOverlay={showOverlay} setShowOverlay={setShowOverlay} 
        setsharePicInfo={setsharePicInfo} sharePicInfo={sharePicInfo}/>
      </section>
  
      <section /* IFRAME RENDERING SECTION, IMPORTED FROM IFRAME COMPONENT IN SLIDESCARD */
       className='' style={{height:'100vh', transition:'ease-in 0.8s'}} onClick={()=> setNavBar(true)}>
        <div style={iframeBox} onMouseLeave={()=> setNavBar(false)}>
       <Iframe sharePicInfo={sharePicInfo} setsharePicInfo={setsharePicInfo} />
          
        </div>
        
       {showNavBar&& /* NAV BAR FOR MAIN PAGE */
        <div className='navbar p-2' style={navBarStyles}>
        <button onClick={()=> setShowOverlay(true, setNavBar(false) , setSideBar(false))} 
        className='btn fs-5 text-light fw-bolder'
          style={{position:'', zIndex:'0', left:'', top:'10px'}}> 
          <MdKeyboardBackspace/> back 
        </button>
        <button /* SIDE BAR TRIGGER BUTTON */ className='btn fs-1 fw-bold text-light' 
          style={{position:'', zIndex:'1', right:'', top:'10px'}} onClick={handleSideBar }>
          {showSideBar?  <AiOutlineMenuUnfold/>  : <AiOutlineMenuFold/>}
        </button>
      </div>
      }
      <div /*BUTTON, TRIGGER FOR NAV BAR */  className=' text-light  p-4' 
        onClick={()=> showNavBar ===true? setNavBar(false) : setNavBar(true)}
        style={navBarTriggerBtn}  >
         <MdOpenWith />
      </div>
        
      </section>
    </>
  )
}

export default App
