import React, { useContext } from 'react'
import {BiToggleLeft, BiToggleRight} from 'react-icons/bi'
import { DataContext } from '../Contexts/DataContext'
import { ProfileContext } from '../Contexts/ProfileContext'
import {FaBars} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

const HeaderNav = () => {
  const Navigation = useNavigate()
  const {setProfile, showProfile, setDropMenu, dropMenu} = useContext(ProfileContext);

    const {profileLabel, setProfileLabel, textMode, modeName,
       mode, setMode, triggerProfile} = useContext(DataContext);
    
    const LogoDp = {height:'55px', width:'55px', borderRadius:'50%',
    overflow:'hidden', cursor:'pointer'}
    const introDp = {height:'85px', width:'85px', borderRadius:'50%', 
    overflow:'hidden'}

    const ReactIconStyle = {width:'16px', margin:''}
    const skillIconStyle = {width:'20px', margin:'0 10px 0 0'}
    const tipsStyle = ['position-absolute py-1 px-3 bg-white text-dark rounded-5 fs-6']
    const showFlagStyles = {fontWeight:'100', fontSize:'12px', position:'relative', left:'15%'}
    const photoSlides = { backgroundColor:'' , position:'relative', top:'0px',
    overflow:'', height:'100%', alignItems:'center',  scale:'0.5'}
    const LogoStyles = {height:'70px', zIndex:'10', position:'fixed', backgroundColor:'transparent',
    width:'100%', backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)', top:'0',
    display:'flex', alignItems:'center', justifyContent:'space-between', color:'#bbb'
  };
  const AnimateMenu = ()=> dropMenu? setDropMenu(false) : setDropMenu(true)


  return (
    <>

    <div className='px-4 py-2 position-fixed' style={LogoStyles}>
        <div>
          <img src='gid.jpg' alt='intro-Dp'className='img-fluid'style={LogoDp}
          onClick={()=> showProfile? setProfile(false) : setProfile(true)} 
          onMouseOver={()=> setProfileLabel(true)} onMouseLeave={()=> setProfileLabel(false)}/> 

           {profileLabel&& <div class="ui left pointing label" style={{position:'absolute', top:'20px', zIndex:'10'}}>
           click to view Profile
          </div>}
        </div>

       <div /* DROP DOWN MENU BTN */ className='fs-1' style={{cursor:'pointer'}}> 
         <FaBars onClick={AnimateMenu}/> 
       </div> 
  
    </div>
      
    </>
  )
}

export default HeaderNav
