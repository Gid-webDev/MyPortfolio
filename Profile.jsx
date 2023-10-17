import React, { useCallback, useEffect, useRef, useState } from 'react'
import {BsArrowRight} from 'react-icons/bs'
import {projectPics} from '../portfolioPic'
import {SlidesCard} from './SlidesCard'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'




const Profile = ({setProfile, showProfile}) => {

    const [showTips, setTips] = useState(false)
    const [showflag, setflag] = useState(false)
    const [profileLabel, setProfileLabel] = useState(false)
 
    const myIntro = showProfile ===true? {
      height:'100%', width:'100%', overflow:'scroll', backgroundColor:'#000',
      color:'#bbb', display:'grid', transform:'translateX(0%)', transition:' 0.8s'} : 
      { transition:' 1s', transform:'translateX(-100%)' }

    const ReactIconStyle = {width:'16px', margin:''}
    const LogoDp = {height:'50px', width:'50px', borderRadius:'50%', 
    overflow:'hidden', cursor:'pointer'}
    const introDp = {height:'65px', width:'65px', borderRadius:'50%', 
    overflow:'hidden', cursor:'pointer'}
    const tipsStyle = ['position-absolute py-1 px-3 bg-white text-dark rounded-5 fs-6']

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
    const skillIconStyle = {width:'20px', margin:'0 10px 0 0'}


  return (
    <div>
    <section className='col-lg-3 col-md-5 px-4 py-0' style={myIntro}>
    <div style={{position:'relative',}}>
    <div className='d-flex align-items-center rounded-5 py-2'>
         <img src='gid.jpg' alt='intro-Dp'className='img-fluid'style={introDp} 
           onClick={()=> setProfile(false)} onMouseMove={()=> setProfileLabel(true)} onMouseLeave={()=> setProfileLabel(false)}/> 
            {profileLabel&& <div class="ui left pointing label" style={{position:'absolute', left:'70px'}}>
            click to collapse Profile
         </div>}
         <span className='px-2'>
           <span style={{fontSize:'16px', fontWeight:'100'}}> Gideon  </span><br/>
            Nwabueze
         </span>
         <button className='btn bg-ing text-light fs-2 ' onClick={()=> showProfile? setProfile(false) : setProfile(true)}
         style={{position:'absolute', top:'10px', right:'0',}}>
            <AiOutlineClose/>
           </button>
         <hr/>
        </div>
    
   <div className='fw-bold h3'> 
   {showTips&& <div class="ui pointing below label" style={{position:'absolute'}}>
   My github page
 </div>} 
   Frontend<span>
     <img src='react.png' alt='React developer' style={ReactIconStyle} />
   </span>  Developer<br/>
   <a href='https://github.com/Gid-webDev' target='_blank' 
   onMouseMove={()=> setTips(true)}  onMouseLeave={()=> setTips(false)} 
   style={{fontSize:'13px', position:'relative', top:'-10px', fontWeight:'100'}}>
     gid-webDev
     <hr className='text-light' style={{position:'relative', top:'-5px',}} /> 
   </a> 
</div>
     <div className='my-3 px-0 fw-lighter'>
       {Skills.map((skill, id) => (<li key={id} style={SkillsStyle(skill)}>
        <img src={skill.Icon} alt='Icon' style={skillIconStyle} /> {skill.name}
           </li> ))}
     </div>
     
    </div>
    </section>
    </div>
  )
}

export default Profile
