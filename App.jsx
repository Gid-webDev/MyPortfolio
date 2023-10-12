import React, { useState } from 'react'
import Overlay from './components/overlay'
import {SlidesCard} from './components/SlidesCard';
import { Iframe } from './components/SlidesCard';
import {MdKeyboardBackspace, MdOpenWith} from 'react-icons/md';
import {AiOutlineMenuUnfold, AiOutlineMenuFold} from 'react-icons/ai'



const App = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [picInfo, setPicInfo] = useState('');
  const [showSideBar, setSideBar] = useState(false)
  const [showNavBar, setNavBar] = useState(false)

  
  
const showOverlayStyle = showOverlay === true? ({ transition:'ease-in 0.6s'}) : 
({ transform:'translateX(-105%)', position:'absolute', transition:'ease-out 0.6s',})
  const overlayStyles = () => ({
    ...showOverlayStyle, 
  })
  const navBarStyles = ({ 
    zIndex:'0', top:'0px', backgroundColor:'rgba(0, 0, 0, 0.5)', width:'95%',
     position:'absolute',backdropFilter:'blur(8px)', left:'40px'
    })
    const introDp = {height:'70px', top:'0px', position:'absolute',
    overflow:'hidden', left:'0', cursor:'pointer' }
  const iframeBox = showSideBar ===true? 
  ({transform:'translateX(-25%)', height:'100%', transition:'0.8s'})  :
   ({width:'100%', height:'100%',  transition:'0.8s'})
   const navBarTriggerBtn = {
    position:'absolute', zIndex:'0', left:'0%', top:'3px', 
   cursor:'pointer', backgroundColor:'rgba(0, 0, 0, 0.6)'
  }

  const handleSideBar = ()=> showSideBar? setSideBar(false, ) :
   setSideBar(true)
  

  

  return (
    <>
      <section /* WELCOME PAGE */ style={overlayStyles()}>
        <Overlay showOverlay={showOverlay} setShowOverlay={setShowOverlay}/>
      </section>
        
      <section 
        className='' style={{height:'100vh', }} onClick={()=> setNavBar(true)}>
        <div style={iframeBox} onMouseLeave={()=> setNavBar(false)}>
          <Iframe picInfo={picInfo}  />
        </div>
        
       {showNavBar&& /* NAV BAR FOR MAIN PAGE */
        <div className='navbar d-flex px-4' style={navBarStyles}>
        <button onClick={()=> setShowOverlay(true, setNavBar(false) , setSideBar(false))} className='btn fs-5 text-light'
          style={{position:'', zIndex:'0', left:'0', top:'10px'}}> 
          <MdKeyboardBackspace/> back 
        </button>
        <button /* SIDE BAR TRIGGER BUTTON */ className='btn fs-1 text-light ' 
          style={{position:'', zIndex:'1', right:'10px', top:'10px'}} onClick={handleSideBar }>
          {showSideBar?  <AiOutlineMenuUnfold/>  : <AiOutlineMenuFold/>}
        </button>
      </div>
      }
      <div /* CLICK TO SEE TO NAV BAR */  className=' fs-1 text-light px-2 py-3' 
        onClick={()=> showNavBar ===true? setNavBar(false) : setNavBar(true)}
        style={navBarTriggerBtn}  >
         <MdOpenWith />
      </div>
        
      </section>
    </>
  )
}

export default App
