import React, { useEffect, useState, useContext } from 'react'
import Overlay from './components/Overlay';
import {MdKeyboardBackspace,} from 'react-icons/md';
import {AiOutlineMenuUnfold, AiOutlineMenuFold} from 'react-icons/ai'
import {BsArrowBarDown} from 'react-icons/bs'
import ProjectDetails from './components/ProjectDetails';
import { projectPics } from './portfolioPic';
import Card from './components/Card';
import { Iframe } from './components/Iframe';
import { ProfileContext } from './Contexts/ProfileContext';
import { DataContext } from './Contexts/DataContext';
import NavBar from './components/NavBar';
import Button from './components/Button';






const App = () => {

  const [showProfile, setProfile] = useState(true)
  const [showOverlay, setShowOverlay] = useState(true);
  const [picInfo, setPicInfo] = useState('');
  const [showSideBar, setSideBar] = useState(false);
  const [showNavBar, setNavBar] = useState(false);
  const [picIndex, setPicIndex] = useState(-1);
  const [mode, setMode] = useState(true);
  const [toggleLabel, setToggleLabel] = useState(false);
  const [goBack, setGoback] = useState(false);
  const [welcomeNote, setWelcomeNote] = useState(true);
  const [project, setProject] = useState([]);
  const [showIframe, setIframe] = useState(false)
  const [viewProjectDetails, setViewProjectDetails] = useState(false)
  const [navBarOn, setNavBarOn] = useState(true)
 
 
  
 const Dark = '#111'
 const Light = '#fff'
 const selectedMode = mode? Light : Dark
 const modeName = mode? 'Light' : 'Dark'
 const textMode = mode? '#111' :  '#bbb'
 const BGcolor = mode? '#111' : '#fff'
 

 const LogoDp = {height:'55px', width:'55px', borderRadius:'50%', picIndex,
overflow:'hidden', cursor:'pointer'}
    
const showOverlayStyle = showOverlay === true? ({ transition:'ease-in 0.6s',
 height:'100%', width:'100%'}) : 
({ transform:'translateX(-100%)', position:'relative', transition:'ease-out 0.6s', })
  const overlayStyles = () => ({
    ...showOverlayStyle, backgroundColor:'pink',
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
   const welcomeNoteStyles = welcomeNote? ({position:'fixed', top:'0', left:'0', width:'100%', height:'100vh', zIndex:'15',
     display:'grid', placeItems:'center', backdropFilter:'blur(5px)', WebkitBackdropFilter:'blur(5px)',
     padding: '0 25px', transform:'translateY(0)', transition:'0.7s'
    })    :       {position:'fixed', top:'0', left:'0', width:'100%', height:'100vh', zIndex:'15',
    display:'grid', placeItems:'center', backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)',
    padding: '0 25px', transform:'translateY(-100vh)', transition:'ease-out 2.1s'

   }
   const iframeContainer = showIframe === true?  'position-fixed' : 'd-none'
   const slideToProductDetails =  viewProjectDetails? 'translateX(-40%)' : 'translateX(0%)'
  

   useEffect(()=>{
     
   },[])

  

  return (
    <>
    <DataContext.Provider 
    value={{picIndex, setPicIndex, showIframe, setIframe, setShowOverlay, showOverlay, setProfile, showProfile,
      picInfo, setPicInfo,project, textMode, selectedMode, setViewProjectDetails, 
      navBarOn, setNavBarOn, viewProjectDetails}}>
      <ProfileContext.Provider value={{showProfile, setProfile}}>
              { // WELCOME NOTE
                <section className='text-dark' style={welcomeNoteStyles}>  
                <div className='bg-light text-left rounded-2 py-4 row' style={{boxShadow:'1px 1px 10px'}} >
                  <img className='col-3 rounded-circle' src='gid.jpg' alt='' style={{width:'70px', height:'50px',}} />
                  <strong className='col-9 h3' style={{fontSize:'',  lineHeight:'1.2',}}> 
                  Hello!, my name is  <span className='text-primary'>Gideon Nwabueze,</span> <br/>
                  <span className='' style={{lineHeight:''}}>I'm a frontEnd developer from Nigeria,
                  welcome to my portfolio website.
                  <br/> 
                  <button className='btn btn-primary my-1' onClick={()=> setWelcomeNote(false)}>
                     Explore
                   </button>
                  </span> 
               </strong>
                </div>
             </section>}
          
                <section /* OVERLAY PAGE */ style={overlayStyles()} >
                  <Overlay showOverlay={showOverlay} setShowOverlay={setShowOverlay} setIframe={setIframe}
                  setPicIndex={setPicIndex} picIndex={picIndex} mode={mode} BGcolor={BGcolor}
                  selectedMode={selectedMode} setMode={setMode} modeName={modeName} textMode={textMode}/>
                </section>    

                
                <section /* CARDS */ className='position-relative' 
                style={{height:'100%', width:'100%', backgroundColor:`${selectedMode}` }}>
                  <div /* CARDS DISPLAY CONTAINER */ className='row' style={{scale:'0.9'}}>            
                  <strong className='w-100 text-start fs-1 fw-bold py-4 position-absolute' 
                    style={{color:selectedMode, backgroundColor:BGcolor, position:'relative', top:'-50px',}}> 
                      Collect<span className='text-warning'>ions</span> of <span className='text-warning'>Projects</span>
                  </strong> 
                 
                  {// CARDS RENDERING SECTION
                    projectPics.map((project, projectId) => (
                    <div className='col-lg-6 col-xs px-3 my-0' key={projectId} onSelect={()=> setProject(project)} 
                     style={{scale:'', display:'flex', justifyContent:'center'}}>
                      <Card project={project} projectId={projectId} textMode={textMode} setIframe={setIframe}
                      setPicIndex={setPicIndex} picIndex={picIndex} selectedMode={selectedMode} />
                      
                    </div>
                    
                  ))}
                  </div> 
                 <section /* CONTAINER FOR IFRAME & PROJECT DETAILS */   className='bg-warning'>
                 { // FLOATING NAVBAR
                  showIframe&& <div className='position-fixed' style={{zIndex:'11'}}>
                      <NavBar/>
                   </div>}
                    {showIframe&& <section /* PROJECT DETAILS */ className='d-flex' 
                    style={{height:'100vh', width:'40%', position:'fixed', top:'0', right:'0',
                    zIndex:'10', backgroundColor:selectedMode, alignItems:'center', justifyContent:'center'}}>
                   <div /* CARD CONTAINER => PROJECTS DETAILS */>
                      <div className="card" style={{width: '18rem', boxShadow:`1px 1px 8px ${textMode}`}}>
                      <img src={projectPics[picIndex].poster} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{projectPics[picIndex].name}</h5>
                      <p className="card-text">
                      {projectPics[picIndex].Description}
                      </p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item fw-bold">
                        Used technologies
                      </li>
                      <li className="list-group-item text-dark w-100 d-flex" style={{overflowX:'auto',}}>
                      {projectPics[picIndex].Technologies.map((tech, id) => 
                        <button className='btn btn-dark m-1' style={{fontSize:'11px', }}> 
                        {tech}</button>)}
                      </li>
                    </ul>
                     <div className="card-body">
                       <a href={projectPics[picIndex].link} className="card-link">{projectPics[picIndex].Title}</a>
                     </div>
                   </div>
                  </div>
                    </section> }
                   <div /* VIEW PROJECTS IN APP THROUGH IFRAME */ className={iframeContainer} 
                    style={{top:'0px', width:'100%', height:'100vh', zIndex:'10', backgroundColor: selectedMode, display:'flex', alignItems:'center', transform: slideToProductDetails, transition:'0.8s'}}>
                     
                    <Iframe picIndex={picIndex} setIframe={setIframe}/> 
                   </div>
                 </section>
                </section>
      </ProfileContext.Provider>
      </DataContext.Provider>
    </>
  )
}

export default App
