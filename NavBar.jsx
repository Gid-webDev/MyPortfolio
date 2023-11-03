import React, {useContext, useState } from 'react';
import {AiOutlineMenuUnfold, AiOutlineMenuFold} from 'react-icons/ai';
import {MdKeyboardBackspace,} from 'react-icons/md';
import {BsArrowsExpand, BsArrowsCollapse} from 'react-icons/bs'
import { DataContext } from '../Contexts/DataContext';


const NavBar = () => {

    const {viewProjectDetails, setViewProjectDetails, setIframe,
       setPicIndex, setProfile, navBarOn, setNavBarOn, showProfile, textMode} = useContext(DataContext)

    const [showSideBar, setSideBar] = useState(false);
    const [showNavBar, setNavBar] = useState(true);
    const [mode, setMode] = useState(true);
    const [toggleLabel, setToggleLabel] = useState(false);
    const [toggleNav, setToggleNav] = useState(false);
    const [goBack, setGoback] = useState(false);
    const [barHeight, setBarHeight] = useState(true)



  const navBarBtnStyles = {position:'relative', zIndex:'0', top:'0px',  padding:'',}
  const navBarTriggerBtn = {
     left:'0%', top:'80px', cursor:'pointer', padding:'0px', height:'130px',
  }
  const handleSideBar = ()=> viewProjectDetails? setViewProjectDetails(false, setToggleLabel(false)) :
   setViewProjectDetails(true, setToggleLabel(false))

   const navBarStyles = showNavBar? {zIndex:'0', top:'0px',
   height:'170px' ,position:'relative', left:'0px', display:'grid',
  transition:'0.9s', }  :  { height:'170px', transform:'translateY(-400px)',
  transition:'ease-out 0.9s', display:'grid',}

  const navBarHeight = barHeight? '300px' : '140px'
  return (
    <>

    {navBarOn && <div /* NAV_BAR BUTTON'S CONTAINER  */
    className='navBar position-fixed  rounded-2' 
     style={{top:'90px', left:'5px', width:'58px', backdropFilter:'blur(10px)',
     WebkitBackdropFilter:'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.5)',
     height:navBarHeight, transition:'0.6s', boxShadow:`0px 0px 3px 0px ${textMode}`}} >

     <div /*IFRAME NAV BAR */  className=' text-light rounded' style={navBarTriggerBtn}  >
     
     <button className='btn fs-2 text-light py-2' style={navBarBtnStyles}>
     <img src='gid.jpg' alt='gid.png' className='img-fluid rounded-circle ' 
      style={{width:'40px', height:'40px'}} onClick={() => showProfile? setProfile(false, setNavBarOn(true)) : setProfile(true, setNavBarOn(false))}/>
      
     
     <BsArrowsCollapse className='my-5' onClick={()=> showNavBar===true? setNavBar(false, setToggleNav(false), setBarHeight(false)) : setNavBar(true, setToggleNav(false), setBarHeight(true))}
     onMouseOver={()=> setToggleNav(true)} onMouseLeave={()=> setToggleNav(false)}/>
   </button>
   {toggleNav&& 
    <div className="ui left pointing label" style={{position:'absolute', top:'80px', width:'180px', padding:'8px 0', left:'45px'}}>
      Expand or Collapse
    </div>}
    </div>

    <div className='navbar fs-1 rounded btn' style={navBarStyles}>
     <button /* GO BACK BTN */
        onClick={()=> setIframe(false, setViewProjectDetails(false), setNavBar(false), setPicIndex(-1))} 
        className='btn text-light fs-2' onMouseEnter={()=> setGoback(true)} 
        onMouseLeave={()=> setGoback(false)} style={navBarBtnStyles}> 
         <MdKeyboardBackspace/>  
        {goBack&& 
       <div className="ui left pointing label" style={{position:'absolute', width:'180px', padding:'8px 0'}}>
         Go back!
       </div>}
     </button>
    <button /* TOGGLE BTN */ className='btn fs-2 text-light rounded' onMouseOver={()=> setToggleLabel(true)} onMouseLeave={()=> setToggleLabel(false)}
      style={navBarBtnStyles} onClick={handleSideBar }>
      {viewProjectDetails?  <AiOutlineMenuUnfold/>  : <AiOutlineMenuFold/>} 
       {toggleLabel&& <div className="ui left pointing label" style={{position:'absolute', width:'180px', padding:'8px 0'}}>
      click to view Project details
    </div>}
    </button>
  </div>
</div>}
      
    </>
  )
}

export default NavBar
