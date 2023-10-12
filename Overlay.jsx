import React, { useCallback, useEffect, useRef, useState } from 'react'
import {BsArrowRight} from 'react-icons/bs'
import {projectPics} from '../portfolioPic'
import {SlidesCard} from './SlidesCard'
import {AiFillGithub} from 'react-icons/ai'



const Overlay = ({showOverlay, setShowOverlay}) => {

    const [showTips, setTips] = useState(false)
    const [showflag, setflag] = useState(false)

    const myIntro = () => ({
         height:'100vh', overflow:'scroll', backgroundColor:'#111',
         color:'#bbb', placeItems:'center', display:'grid'
    }) 
    const introDp = {height:'60px', width:'60px', borderRadius:'50%', 
    overflow:'hidden'}

    const Skills= [ 
    {name: 'React', id: 1, Icon: 'SiReact'},  
    {name: 'JavaScript', id: 2, Icon: 'SiRedux'}, 
    {name: 'TypeScript', id: 3, Icon: 'SiTypescript'},  
    {name: 'Figma', id: 4, Icon: 'SiFigma'}, 
    {name: 'HTML & CSS', id: 5, Icon: 'SiCss3'},
    {name: 'Github', id: 6, Icon: ''},
    {name: 'Bootstrap & Semantic UI', id: 6, Icon: ''},
]
    const SkillsStyle = (skill) => ({
        listStyle:'none', textAlign:'start', margin:'8px 0', fontWeight:'100',
        fontSize:'14px'
    });

    const tipsStyle = ['position-absolute py-2 px-3 bg-secondary text-light rounded-5']
    const showFlagStyles = {fontWeight:'100', fontSize:'12px', position:'relative', left:'15%'}
    const photoSlides = { backgroundColor:'#000', placeItems:'center', display:'flex', 
    overflow:'hidden', height:'100vh'}
    
  return (
    <>
       <div className='row bg-info' style={{height:'100vh', width:'103%', position:'absolute', overflow:'hidden', zIndex:'5'}}>

       <section className='col-lg-3 col-md-5 px-5 py-4 shadow' style={myIntro()}>
         <div>
         <span className='d-flex align-items-center rounded-5'>
         <img src='gid.jpg' alt='intro-Dp'className='img-fluid'style={introDp} /> 
         <span className='px-3'>
           <span style={{fontSize:'13px'}}> Gideon Nwabueze </span><br/>
           <a href='https://github.com/Gid-webDev' target='_blank' 
           onMouseMove={()=> setTips(true)}  onMouseLeave={()=> setTips(false)}>
           <span style={{fontSize:'15px', fontWeight:'900', color:'#f9f9f9'}}>
           <AiFillGithub style={{marginRight:'8px', cursor:'pointer'}} /> 
           Gid-webDev </span>
           {showTips&& <div /* Tooltip */ className={tipsStyle}>
           github page </div>}
           </a>
         </span>
            <hr/>
        </span>
          <p className='fw-bolder py-4 fs-1' style={{fontSize:''}}>  
             Frontend Developer <img src='9ja.png' alt='Nigerian flag' onMouseMove={()=> 
                setflag(true)} onMouseLeave={()=> setflag(false)}
              style={{width:'32px', margin:'0 10px'}} /> {showflag&& <p className={tipsStyle} 
              style={showFlagStyles}> Nigerian flag</p>} <br/>
              
          </p>
          <div className='my-3'>
           <p className='h4' style={{color:'#ddd'}}>Tech Skills</p>
            <hr/>
            {Skills.map((skill, id) => (<li key={id} style={SkillsStyle(skill)}>
                {skill.name} 
                </li> ))}
          </div>
          <button className='btn btn-outline-light  fs-6 px-4 py-2 rounded-1' 
          onClick={()=> setShowOverlay(false)}>
            Projects <span> <BsArrowRight/> </span>
          </button>
         </div>
         </section>

         <section /* PHOTO SLIDES */ className='col-lg-9 col-md-7 text-light ' 
         style={photoSlides}>
           <div className='SlidesContainer' style={{height:'610px',}}>
             <SlidesCard parentWidth={400} setShowOverlay={setShowOverlay}/>
           </div>
         </section>
       </div>  
    </>
  )
}

export default Overlay
