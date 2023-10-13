import React, { useCallback, useEffect, useRef, useState } from 'react'
import {BsArrowRight} from 'react-icons/bs'
import {projectPics} from '../portfolioPic'
import {SlidesCard} from './SlidesCard'
import {AiFillGithub} from 'react-icons/ai'



const Overlay = ({showOverlay, setShowOverlay, sharePicInfo, setsharePicInfo}) => {

    const [showTips, setTips] = useState(false)
    const [showflag, setflag] = useState(false)

    const myIntro = () => ({
         height:'100vh', overflow:'scroll', backgroundColor:'#000',
         color:'#bbb', display:'grid'
    }) 
    const introDp = {height:'85px', width:'85px', borderRadius:'50%', 
    overflow:'hidden'}

    const Skills= [ 
    {name: 'React', id: 1, Icon: 'react.png'},  
    {name: 'JavaScript', id: 2, Icon: 'javascript.png'}, 
    {name: 'TypeScript', id: 3, Icon: 'typescript.png'},  
    {name: 'Figma', id: 4, Icon: 'figma.png'}, 
    {name: 'HTML & CSS', id: 5, Icon: 'css.png'},
    {name: 'Github', id: 6, Icon: 'github.png'},
    {name: 'Bootstrap & Semantic UI', id: 6, Icon: 'bootstrap.png'},
    {name: 'Redux & Context Api', id: 7, Icon: 'redux.png'},
]
    const SkillsStyle = (skill) => ({
        listStyle:'none', textAlign:'start', margin:'20px 0',
        fontSize:'16px',
    });
    const skillIconStyle = {width:'20px', margin:'0 10px 0 0'}

    const tipsStyle = ['position-absolute py-2 px-3 bg-secondary text-light rounded-5']
    const showFlagStyles = {fontWeight:'100', fontSize:'12px', position:'relative', left:'15%'}
    const photoSlides = { backgroundColor:'#000', display:'flex', 
    overflow:'hidden', height:'100vh', top:'10%'}
    
  return (
    <>
       <div className='row bg-info' style={{height:'100vh', width:'103%', position:'absolute', overflow:'hidden', zIndex:'5'}}>

       <section className='col-lg-3 col-sm-5 px-4 py-2 shadow' style={myIntro()}>
         <div style={{position:'relative', top:'5%'}}>
         <span className='d-flex align-items-center rounded-5'>
         <img src='gid.jpg' alt='intro-Dp'className='img-fluid'style={introDp} /> 
         <span className='px-4'>
           <span style={{fontSize:'13px'}}> Gideon Nwabueze </span><br/>
           <a href='https://github.com/Gid-webDev' target='_blank' 
           onMouseMove={()=> setTips(true)}  onMouseLeave={()=> setTips(false)}>
           
           {showTips&& <div /* Tooltip */ className={tipsStyle}>
           github page </div>}
           </a>
         </span>
            <hr/>
        </span>
          <p className='fw-bold py-2 h2' style={{fontSize:''}}>  
             Frontend <img src='react.png' alt='React developer' 
              style={{width:'25px', margin:''}} /> Developer
              <hr className='text-light' />
              
          </p>
          <div className='my-3 px-0 fw-lighter'>
            {Skills.map((skill, id) => (<li key={id} style={SkillsStyle(skill)}>
             <img src={skill.Icon} alt='Icon' style={skillIconStyle} /> {skill.name}
                </li> ))}
          </div>
          
         </div>
         </section>

         <section /* PHOTO SLIDES */ className='col-lg-9 col-sm-7 text-light ' 
         style={photoSlides}>
           <div className='SlidesContainer' style={{height:'650px',}}>
             <SlidesCard parentWidth={400} setShowOverlay={setShowOverlay} 
             sharePicInfo={sharePicInfo} setsharePicInfo={setsharePicInfo}/>
           </div>
         </section>
       </div>  
    </>
  )
}

export default Overlay
