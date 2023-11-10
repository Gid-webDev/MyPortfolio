import React, { useEffect, useState, useContext } from 'react'
import Overlay from './components/Overlay';
import {MdKeyboardBackspace,} from 'react-icons/md';
import {AiOutlineMenuUnfold, AiOutlineMenuFold, AiOutlineClose} from 'react-icons/ai'
import {BsArrowBarDown, BsBoxArrowUpRight} from 'react-icons/bs'
import ProjectDetails from './components/ProjectDetails';
import { projectPics } from './portfolioPic';
import Card from './components/Card';
import { Iframe } from './components/Iframe';
import { ProfileContext } from './Contexts/ProfileContext';
import { DataContext } from './Contexts/DataContext';
import NavBar from './components/NavBar';
import './App.css'
import Biography from './components/Biography';
import Footer from './components/Footer';
import CardHeader from './components/CardHeader';
import {SlidesSection} from './STYLED.CONTAINER/Over_SlidesSection.styled';
import HeaderNav from './components/HeaderNav';
import Profile from './components/Profile';
import { SlidesCard } from './components/SlidesCard';
import Services from './components/Services';
import DropdownMenu from './components/DropdownMenu';
import Projects from './components/Projects';
import Modal from './components/Modal';
import {motion, useInView, useAnimation} from 'framer-motion';
import { FaCommentAlt } from 'react-icons/fa';
import * as UsersRes from './STYLED.CONTAINER/UserRes.styled';
import * as CARDS from './STYLED.CONTAINER/CardsContainer.styled';








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
  const [welcomeNote, setWelcomeNote] = useState(false);
  const [project, setProject] = useState([]);
  const [showIframe, setIframe] = useState(false)
  const [viewProjectDetails, setViewProjectDetails] = useState(false)
  const [navBarOn, setNavBarOn] = useState(true);
  const [profileLabel, setProfileLabel] = useState(false);
  const [dropMenu, setDropMenu] = useState(false);
  const [showModal, setModal] = useState(false);
  const [MenuListItem, setListItem] = useState({});
  const [getSocialLinks, setSocialLinks] = useState([]);
  const [menuId, setMenuId] = useState(-1);
  const [usersComment, setComment] = useState(false);
  const [projectId, setProjectId] = useState([]);




  

 
 
  
 const Dark = '#111'
 const Light = '#fff'
 const selectedMode = mode? Light : Dark
 const modeName = mode? 'Light' : 'Dark'
 const textMode = mode? '#111' :  '#bbb'
 const BGcolor = mode? '#111' : '#fff'
 

 const LogoDp = {height:'55px', width:'55px', borderRadius:'50%', picIndex,
overflow:'hidden', cursor:'pointer'}
    
const showOverlayStyle = showOverlay === true? ({ transition:'ease-in 0.6s',
 maxHeight:'82vh', width:'100%'}) : 
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

   };     
   const showProfileStyles = showProfile? 
    ({ top:'px', zIndex:'11', transform:'translateX(0%)',  transition:' 0.9s' }) : 
    ({ top:'px', position:'absolute', zIndex:'10', transform:'translateX(-100%)', transition:' 0.9s' });

    const ProfileAnimated = showProfile? 
    ({ top:'0px', zIndex:'11', transform:'translateX(0%)',  transition:' 0.9s', position:'fixed' }) : 
    ({ top:'px', position:'fixed', zIndex:'10', transform:'translateX(-100%)', transition:' 0.9s' })

    

  const iframeContainer = showIframe? [' position-fixed'] : ['d-none']
   const slideToProductDetails =  viewProjectDetails? 'translateX(-60%)' : 'translateX(0%)'
  


 const IframeStyle = ({top: '0px', width: '100%', height: '100vh', zIndex: '10', 
 backgroundColor: selectedMode, display:'flex', alignItems:'center', 
 transform: slideToProductDetails,
 transition: '0.8s',
});

const slideDownMenu = dropMenu? {right:'10px', top:'70px', transform:'translateY(0%)', zIndex:'10'} : 
{right:'10px', top:'75px', transform:'translateY(-200%)'}
 
   
   useEffect(()=>{
    console.log()
   })

  

  return (
    <>
    <DataContext.Provider 
    value={{projectId, setProjectId, usersComment, setComment, picIndex, setPicIndex, showIframe, setIframe, setShowOverlay, showOverlay, setProfile, showProfile, MenuListItem, setListItem,
      picInfo, setPicInfo, project, setProject, textMode, selectedMode, setViewProjectDetails, showModal, setModal,  BGcolor, menuId, setMenuId,
      navBarOn, setNavBarOn, viewProjectDetails, profileLabel, setProfileLabel, setMode, mode, ProfileAnimated, getSocialLinks, setSocialLinks,
      dropMenu, setDropMenu,
    }}>
      <ProfileContext.Provider value={{showProfile, setProfile, showProfileStyles, dropMenu, setDropMenu, }}>
              { // WELCOME NOTE
                <section className='text-dark' style={welcomeNoteStyles}>  
                <div className='bg-light text-left rounded-2 py-4 row' style={{boxShadow:'1px 1px 10px'}} >
                  <img className='col-3 rounded-circle' src='gid.jpg' alt='' style={{width:'70px', height:'50px',}} />
                  <strong className='col-9 h3' style={{fontSize:'',  lineHeight:'1.2',}}> 
                  Hello!, my name is  <span className='text-primary'>Gideon Nwabueze,</span> <br/>
                  <span className='' style={{lineHeight:''}}>I'm a frontEnd developer from Nigeria, 
                  welcome to my portfolio.
                  <br/> 
                  <button className='btn btn-primary my-1' onClick={()=> setWelcomeNote(false)}>
                     Explore
                   </button>
                  </span> 
               </strong>
                </div>
             </section>}

               <SlidesSection /* SLIDES, HEADER_NAV_BAR, PROFILE */ bg={selectedMode} >
                  <div style={ProfileAnimated}> <Profile/> </div>
                  <HeaderNav/>
                  <Overlay/> 
                  <div className='position-fixed' style={{...slideDownMenu, transition:'0.6s',}}> 
                   <DropdownMenu/> 
                  </div>
                  <Modal/>
               </SlidesSection>
                
                <section /* BIOGRAPHY SECTION */> 
                  <Biography/>
                  <Services/>
                </section>

                {usersComment&& 
                  <div className='position-fixed' 
                     style={{ top:'0px', width:'100%', height:'100vh', margin:'0px', 
                     zIndex:'15', display:'grid', placeItems:'center', backgroundColor:'rgba(0, 0, 0, 0.8)'}}
                     > 
                     <button className='position-absolute text-light fs-1 p-2' style={{top:'15px', right:'20px',
                       backgroundColor:'transparent', border:'none'}} onClick={()=> setComment(false)}>
                      <AiOutlineClose/>
                     </button>
                    <UsersRes.commentBox >
                      {projectPics[projectId.id]? projectPics[projectId.id].comment : null}
                    </UsersRes.commentBox>
                  </div>}

                <CARDS.container_styled /* CARDS */ onClick={()=> setProfile(false)} bg={selectedMode}>
                  <div /* CARDS DISPLAY CONTAINER */ className='row' style={{scale:'0.9'}}>
                  <CardHeader  /* HEADER FOR CARDS */ />            

                  {// CARDS RENDERING SECTION
                    projectPics.map((project, projectIndex) => (
                    <div className='col-lg-6 col-xs px-3 my-0 position-relative' key={projectIndex} 
                    onSelect={()=> setProject(project)} onMouseEnter={()=> setProjectId(project)} 
                     style={{scale:'', display:'flex', justifyContent:'center'}}>
                      <Card project={project} projectId={projectIndex} textMode={textMode} setIframe={setIframe}
                      setPicIndex={setPicIndex} picIndex={picIndex} selectedMode={selectedMode} />
                     
                      

                    </div>
                  ))}
                  
                  </div> 
                   { // FLOATING NAVBAR
                     showIframe&& <div className='position-fixed' style={{zIndex:'15',}}>
                     <NavBar /> <h1 className='text-info'></h1>
                     </div>
                    }
                 <section /* CONTAINER FOR IFRAME & PROJECT DETAILS */   className=''>
                    {showIframe&& <section /* PROJECT DETAILS */ className='' 
                    style={{height:'100vh', width:'60%', position:'fixed', top:'0', right:'0', display:'flex',
                    zIndex:'10', backgroundColor:selectedMode, alignItems:'center', justifyContent:'center',  overflowY:'auto'}}>

                   <div /* CARD CONTAINER => PROJECTS DETAILS */>

                      {projectPics[picIndex]? <div className="card" style={{ maxWidth:'60vw', scale:'0.9', minHeight:'50vh', position:'relative', boxShadow:`1px 1px 2px ${textMode}`,}}>
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
                        <button className='btn btn-dark m-1' key={id} style={{fontSize:'11px', }}> 
                        {tech}</button>)}
                      </li>
                    </ul>
                     <div className="card-body">
                       <a href={projectPics[picIndex].link} target="_blank" className="btn btn-primary">{projectPics[picIndex].Title} <BsBoxArrowUpRight/>   </a>
                     </div>
                   </div> : ''}
                  </div>
                    </section> }
                      
                   <div /* VIEW PROJECTS IN APP THROUGH IFRAME */  className={iframeContainer} style={IframeStyle}>
                      <Iframe/>
                   </div>
                 </section>
                </CARDS.container_styled> 

                <section /* FOOTER SECTION */>
                  <Footer/>
                </section>
      </ProfileContext.Provider>
      </DataContext.Provider>
    </>
  )
}

export default App
