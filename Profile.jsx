import React, { useCallback, useEffect, useRef, useState, useContext } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { ProfileContext } from '../Contexts/ProfileContext'
import { DataContext } from '../Contexts/DataContext'
import { BiToggleLeft, BiToggleRight } from 'react-icons/bi'




const Profile = () => {

    const {setProfile, showProfile, modeName} = useContext(ProfileContext);
    const {navBarOn, setNavBarOn, selectedMode, textMode, BGcolor, mode, setMode} = useContext(DataContext)

    const [showTips, setTips] = useState(false)
    const [profileLabel, setProfileLabel] = useState(false)
 
    const myIntro = showProfile ===true? {
      height:'100vh', width:'300px', overflow:'auto', backgroundColor: selectedMode,
      color:textMode, display:'grid', transform:'translateX(0%)', transition:' 0.8s',
      boxShadow: `0px 0px 3px 0 ${textMode}`, position:'fixed', zIndex:'11' } : 
      { transition:' 1s', transform:'translateX(-100%)', }

    const ReactIconStyle = {width:'18px', margin:''}
    const LogoDp = {height:'50px', width:'50px', borderRadius:'50%', overflow:'hidden', cursor:'pointer'}
    const introDp = {height:'65px', width:'65px', borderRadius:'50%', overflow:'hidden', cursor:'pointer'}
    const tipsStyle = ['position-absolute py-1 px-3 bg-white text-dark rounded-5 fs-6']

    const Skills= [ 
    {name: 'React',
     id: 1,
      Icon: 'react.png'
  },  
    {name: 'Redux',
     id: 2,
      Icon: 'redux.png'
    },
    {name: 'Restful Api',
     id: 3,
      Icon: 'rest.png'
    },
    {name: 'JavaScript',
     id: 4,
      Icon: 'javascript.png'
    }, 
    {name: 'TypeScript',
     id: 5,
      Icon: 'typescript.png'
    },  
    {name: 'Figma',
     id: 6,
      Icon: 'figma.png'
    }, 
    {name: 'HTML',
     id: 7,
      Icon: 'HTML.png'
    },
    {name: 'CSS',
     id: 8,
      Icon: 'css.png'
    },
    {name: 'Github',
     id: 9,
      Icon: 'github.png'
    },
    {name: 'Bootstrap',
     id: 10,
      Icon: 'bootstrap.png'
    },
    {name: 'Semantic UI',
     id: 11,
      Icon: 'Semantic.png'
    },    
    {name: 'MongoDB',
     id: 12,
      Icon: 'mongo.png'
    },
    {name: 'Context Api',
     id: 13,
      Icon: '.png'
    },
    {name: 'Styled Component',
     id: 14,
      Icon: '.png'
    },
]
    const SkillsStyle = (skill) => ({
        listStyle:'none', textAlign:'start', margin:'20px 0',
        fontSize:'18px', fontWeight:'600'
    });
    const skillIconStyle = {width:'20px', margin:'0 10px 0 0'}


  return (
    <>
        <section className='col-lg-3 col-md-5 px-4 py-2' style={myIntro}>
        <div style={{position:'relative', color: textMode}}>
        <div className='d-flex align-items-center rounded-5 py-2'>
             <img src='gid.jpg' alt='intro-Dp'className='img-fluid'style={introDp} 
               onClick={()=> setProfile(false, setNavBarOn(true))} onMouseMove={()=> setProfileLabel(true)}
                onMouseLeave={()=> setProfileLabel(false)}/> 
                {profileLabel&& <div class="ui left pointing label" style={{position:'absolute', left:'70px'}}>
                click to collapse Profile
             </div>}
             <span className='px-2'>
               <span style={{fontSize:'16px', fontWeight:'100'}}> Gideon  </span><br/>
                Nwabueze
             </span>
             <span className='px-3 position-absolute' style={{color: textMode, right:'-20px',}} > 
               {modeName} {mode ===true? 
                 <BiToggleRight className='fs-1' onClick={()=> setMode(false)} style={{cursor:'pointer', color: textMode}}/>  : 
                 <BiToggleLeft className='fs-1' onClick={()=> setMode(true)} style={{cursor:'pointer',  color: textMode}}/>
               }
            </span>
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
         <hr className='text-light' style={{position:'relative', top:'-5px', borderColor:textMode}} /> 
       </a> 
    </div>
         <div className='my-3 px-0 fw-lighter'>
         <div /* HEADING FOR SKILLS */ className='py-2 px-2 rounded-3' style={{color:selectedMode, backgroundColor:BGcolor}}>
             <strong className='fs-5 fw-bold'> Relevant Skills</strong>
         </div>
        
           {Skills.map((skill, id) => (<li key={id} style={SkillsStyle(skill)}>
            <img src={skill.Icon} alt='Icon' style={skillIconStyle} /> {skill.name}
               </li> ))}
          </div>
        </div>
        </section>
    </>
  )
}

export default Profile
