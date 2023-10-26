import React, { useCallback, useEffect, useRef, useState, useContext } from 'react'
import {AiOutlineMenuUnfold, AiOutlineMenuFold} from 'react-icons/ai'
import {BiToggleLeft, BiToggleRight} from 'react-icons/bi'
import {projectPics} from '../portfolioPic'
import {SlidesCard} from './SlidesCard'
import {AiFillGithub} from 'react-icons/ai'
import Profile from './Profile'
import { Link, Router } from 'react-router-dom'
import { Iframe } from './Iframe'
import { ProfileContext } from '../Contexts/ProfileContext'




const Overlay = ({setIframe, BGcolor, setShowOverlay, picIndex, setPicIndex, setMode, mode, selectedMode, modeName, textMode }) => {

    const [showTips, setTips] = useState(false)
    const [showflag, setflag] = useState(false)
    const [profileLabel, setProfileLabel] = useState(false)
    const {setProfile, showProfile} = useContext(ProfileContext);
    
    
 
    const LogoDp = {height:'55px', width:'55px', borderRadius:'50%',
    overflow:'hidden', cursor:'pointer'}
    const introDp = {height:'85px', width:'85px', borderRadius:'50%', 
    overflow:'hidden'}

    const Skills= [ 
    {name: 'React', id: 1, Icon: 'react.png'},  
    {name: 'Redux', id: 2, Icon: 'redux.png'},
    {name: 'Restful Api', id: 3, Icon: 'rest.png'},
    {name: 'JavaScript', id: 4, Icon: 'javascript.png'}, 
    {name: 'TypeScript', id: 5, Icon: 'typescript.png'},  
    {name: 'Figma', id: 6, Icon: 'figma.png'}, 
    {name: 'HTML', id: 7, Icon: 'HTML.png'},
    {name: 'CSS', id: 8, Icon: 'css.png'},
    {name: 'Github', id: 9, Icon: 'github.png'},
    {name: 'Bootstrap', id: 10, Icon: 'bootstrap.png'},
    {name: 'Semantic UI', id: 11, Icon: 'Semantic.png'},    
    
]
    const SkillsStyle = (skill) => ({
        listStyle:'none', textAlign:'start', margin:'20px 0',
        fontSize:'16px',
    });
    const ReactIconStyle = {width:'16px', margin:''}
    const skillIconStyle = {width:'20px', margin:'0 10px 0 0'}
    const tipsStyle = ['position-absolute py-1 px-3 bg-white text-dark rounded-5 fs-6']
    const showFlagStyles = {fontWeight:'100', fontSize:'12px', position:'relative', left:'15%'}
    const photoSlides = { backgroundColor:'' , position:'relative', top:'0px',
    overflow:'', height:'100%', alignItems:'center',  scale:'0.65'}
    const LogoStyles = {height:'70px', zIndex:'10', position:'absolute', backgroundColor:'rgba(0, 0, 0, 0.3)',
    width:'100%', backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)'}
    const showProfileStyles = showProfile? 
    ({ top:'px', zIndex:'11', transform:'translateX(-0%)' }) : 
    ({ top:'px', position:'absolute', zIndex:'10', transform:'translateX(-100%)', transition:'ease-out 0.9s' })
    const triggerProfile = showProfile? ['d-none'] : ['btn bg-ing text-light fs-1']
    
    const containerForPhotoSlides = { backgroundColor: selectedMode,
      height:'100%', width:'100%', position:'', overflow:'hidden',
       zIndex:'5',
  }
  
  return (
    <> 
     <ProfileContext.Provider value={{showProfile, setProfile}}>
     <div id='overlayContainer'  className=''>
     <div className='px-3 py-2 d-block position-fixed' style={LogoStyles}>
        <img src='gid.jpg' alt='intro-Dp'className='img-fluid'style={LogoDp}
         onClick={()=> showProfile? setProfile(false) : setProfile(true)} 
         onMouseOver={()=> setProfileLabel(true)} onMouseLeave={()=> setProfileLabel(false)}/> 

         {profileLabel&& <div class="ui left pointing label" style={{position:'absolute', top:'20px', zIndex:'10'}}>
         click to view Profile
       </div>}

           <span className='px-3' style={{color:'#fff',}} > 
            {modeName} {mode ===true? 
             <BiToggleRight className='fs-1' onClick={()=> setMode(false)} style={{cursor:'pointer'}}/>  : 
              <BiToggleLeft className='fs-1' onClick={()=> setMode(true)} style={{cursor:'pointer'}}/>
             }
            </span> 

       <button className={triggerProfile} onClick={()=> setProfile(true)}
         style={{position:'absolute', top:'-5px', left:'80px', zIndex:''}}>
         {showProfile&& <AiOutlineMenuUnfold/>}
      </button>    
    </div>
     
     <div className='position-fixed'  /* PROFILE COMPONENT */ style={showProfileStyles}> 
       <Profile setProfile={setProfile} showProfile={showProfile} BGcolor={BGcolor} 
       textMode={textMode} selectedMode={selectedMode}/> 
     </div>

    <div className='' style={containerForPhotoSlides}>
      <section /* PHOTO SLIDES */ style={photoSlides}> 
        <div style={{}}>
          <SlidesCard parentWidth={500} setShowOverlay={setShowOverlay} setProfile={setProfile}
          picIndex={picIndex} setPicIndex={setPicIndex} setIframe={setIframe} />
        </div>
      </section>
  </div>
  
  
 </div>

     </ProfileContext.Provider>   
    </>
  )
}

export default Overlay
