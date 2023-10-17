import React, { useCallback, useEffect, useRef, useState } from 'react'
import {AiOutlineMenuUnfold, AiOutlineMenuFold} from 'react-icons/ai'
import {projectPics} from '../portfolioPic'
import {SlidesCard} from './SlidesCard'
import {AiFillGithub} from 'react-icons/ai'
import Profile from './Profile'



const Overlay = ({showOverlay, setShowOverlay, sharePicInfo, setsharePicInfo}) => {

    const [showTips, setTips] = useState(false)
    const [showflag, setflag] = useState(false)
    const [showProfile, setProfile] = useState(true)
    const [profileLabel, setProfileLabel] = useState(false)
    const [welcomeNote, setWelcomeNote] = useState(true)
    
 
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
    const photoSlides = { backgroundColor:'#000', display:'flex', position:'relative',
    overflow:'hidden', height:'100vh',}
    const LogoStyles = {height:'70px', zIndex:'10', position:'absolute', width:'100%'}
    const showProfileStyles = showProfile? 
    ({ top:'px', position:'absolute', zIndex:'10', transform:'translateX(-0%)' }) : 
    ({ top:'px', position:'absolute', zIndex:'10', transform:'translateX(-100%)', transition:'ease-out 0.9s' })
    const triggerProfile = showProfile? ['d-none'] : ['btn bg-ing text-light fs-1']
    const welcomeNoteStyles = {position:'absolute', top:'0', left:'0', width:'100%', height:'100vh', zIndex:'12',
     display:'grid', placeItems:'center', backdropFilter:'blur(5px)', WebkitBackdropFilter:'blur(5px)',
     padding: '0 25px'
    }
   
    
  return (
    <>
    { // WELCOME NOTE
     welcomeNote &&<section className='text-dark' style={welcomeNoteStyles}>  
     <div className='bg-light text-left rounded-2 py-4 row' >
       <img className='col-3 rounded-circle' src='gid.jpg' alt='' style={{width:'70px', height:'50px',}} />
       <strong className='col-9 h3' style={{fontSize:'',  lineHeight:'1.2',}}> 
       Hello, I'm <span className='text-primary'>Gideon Nwabueze</span> <br/>
       <span className='' style={{lineHeight:''}}>
       Welcome & thanks for taking timeout to veiw my portfolio website.
       <br/> 
       <button className='btn btn-primary my-1' onClick={()=> setWelcomeNote(false)}>
          Continue
        </button>
       </span> 
    </strong>
     </div>
  </section>}

        <div className='px-3 py-2 d-block text-light' style={LogoStyles}>
           <img src='gid.jpg' alt='intro-Dp'className='img-fluid'style={LogoDp}
            onClick={()=> showProfile? setProfile(false) : setProfile(true)} 
            onMouseOver={()=> setProfileLabel(true)} onMouseLeave={()=> setProfileLabel(false)}/> 
            {profileLabel&& <div class="ui left pointing label">
            click to view Profile
          </div>}

          <button className={triggerProfile} onClick={()=> setProfile(true)}
            style={{position:'absolute', top:'-5px', left:'80px', zIndex:''}}>
            {showProfile&& <AiOutlineMenuUnfold/>}
         </button>    
       </div>
        
        <div className=''  /* PROFILE COMPONENT FOR SMALLER SCREEN SIZE */ 
        style={showProfileStyles}> 
          <Profile setProfile={setProfile} showProfile={showProfile}/> 
        </div>
  
      <div  className=' bg-dark' style={{height:'100vh', width:'103%', position:'absolute', overflow:'hidden', zIndex:'5'}}>

         <section /* PHOTO SLIDES */ className=' text-light ' style={photoSlides}> 
           <div className='SlidesContainer' style={{height:'100vh',}}>
             <SlidesCard parentWidth={400} setShowOverlay={setShowOverlay} setProfile={setProfile}
             sharePicInfo={sharePicInfo} setsharePicInfo={setsharePicInfo}/>
           </div>
         </section>
     </div>  
    </>
  )
}

export default Overlay
