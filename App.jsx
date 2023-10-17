import React, { useState } from 'react'
import Overlay from './components/overlay'
import {SlidesCard} from './components/SlidesCard';
import { Iframe } from './components/Iframe';
import {MdKeyboardBackspace,} from 'react-icons/md';
import {AiOutlineMenuUnfold, AiOutlineMenuFold} from 'react-icons/ai'
import {BsArrowBarDown} from 'react-icons/bs'
import ProjectDetails from './components/ProjectDetails';



const App = () => {

  const [showOverlay, setShowOverlay] = useState(true);
  const [picInfo, setPicInfo] = useState('');
  const [showSideBar, setSideBar] = useState(false);
  const [showNavBar, setNavBar] = useState(false);
  const [sharePicInfo, setsharePicInfo] = useState(0);
  const [mode, setMode] = useState(true);
  const [toggleLabel, setToggleLabel] = useState(false);
  const [goBack, setGoback] = useState(false)
 

  
 const darkMode = {color:'black', backgroundColor:'black'} 
 const LightMode = {color:'white', backgroundColor:'white'}
const showOverlayStyle = showOverlay === true? ({ transition:'ease-in 0.6s'}) : 
({ transform:'translateX(-105%)', position:'absolute', transition:'ease-out 0.6s',})
  const overlayStyles = () => ({
    ...showOverlayStyle, 
  })
  
  const navBarStyles = showNavBar? {zIndex:'0', top:'210px', backgroundColor:'rgba(0, 0, 0, 0.8)',
   height:'170px' ,position:'relative',backdropFilter:'blur(10px)', left:'0px', display:'grid',
  transition:'0.9s', padding:'0px', }  :  { height:'170px', transform:'translateY(-400px)', 
  transition:'ease-out 0.9s', display:'grid',}

    const introDp = {height:'70px', top:'0px', position:'absolute',
    overflow:'hidden', left:'0', cursor:'pointer' }
  const iframeBox = showSideBar ===true? 
  ({transform:'translateX(-35%)', height:'100%', transition:'0.8s'})  :
   ({width:'100%', height:'100%',  transition:'0.8s'})
   const navBarTriggerBtn = {
    position:'absolute', zIndex:'0', left:'0%', top:'80px', fontSize:'',
   cursor:'pointer', backgroundColor:'rgba(0, 0, 0, 0.8)', backdropFilter:'blur(10px)',
   padding:'0px', height:'130px'
  }
  const navBarBtnStyles = {position:'relative', zIndex:'0', top:'10px',  padding:'15px'}
  const handleSideBar = ()=> showSideBar? setSideBar(false, setToggleLabel(false)) :
   setSideBar(true, setToggleLabel(false))
  

  

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
        
       <section /* IFRAME PROJECT DETAILS  */ className='py-2' 
        style={{top:'0', position:'absolute', right:'0', width:'34%', height:'100vh', zIndex:'-1',
          display:'grid', placeItems:'center', backgroundColor:'#111', overflowY:'auto'}}> 
          <ProjectDetails setsharePicInfo={setsharePicInfo} sharePicInfo={sharePicInfo}/>
       </section>
          
       
      <div /* NAV_BAR BUTTON'S CONTAINER  */
      className='navBar position-absolute' onMouseEnter={()=> setNavBar(true)} onMouseLeave={()=> setNavBar(false)}
       style={{top:'5px', left:'5px'}}>
      <div className='navbar fs-1 bg-dark rounded btn' style={navBarStyles}>
      <button /* GO BACK BTN */
      onClick={()=> setShowOverlay(true, setNavBar(false) , setSideBar(false))} 
      className='btn text-light fs-2' onMouseEnter={()=> setGoback(true)} onMouseLeave={()=> setGoback(false)}
        style={navBarBtnStyles}> 
        <MdKeyboardBackspace/>  
        {goBack&& <div class="ui left pointing label" style={{position:'absolute', width:'180px', padding:'8px 0'}}>
         Go back!
     </div>}
      </button>
      <button /* TOGGLE BTN */ className='btn fs-2 text-light rounded' onMouseOver={()=> setToggleLabel(true)} onMouseLeave={()=> setToggleLabel(false)}
        style={navBarBtnStyles} onClick={handleSideBar }>
        {showSideBar?  <AiOutlineMenuUnfold/>  : <AiOutlineMenuFold/>} 
         {toggleLabel&& <div class="ui left pointing label" style={{position:'absolute', width:'180px', padding:'8px 0'}}>
        click to view Project details
      </div>}
      </button>
    </div>
    
    <div /*IFRAME BUTTON, TRIGGER FOR NAV BAR */  className=' text-light rounded bg-dark' style={navBarTriggerBtn}  >
      <button className='btn fs-2 text-light py-2 bg-dark' style={navBarBtnStyles}>
       <img src='gid.jpg' alt='gid.png' className='img-fluid rounded-circle ' style={{width:'40px', height:'30px'}}/> 
       <BsArrowBarDown className='my-5'/>
     </button>
    </div>
      </div>
        
      </section>
    </>
  )
}

export default App
