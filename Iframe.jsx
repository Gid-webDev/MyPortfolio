import React, { Children, useCallback, useEffect, useRef, useState, useContext } from 'react';
import { projectPics } from '../portfolioPic';
import ProjectDetails from './ProjectDetails';
import {AiOutlineMenuUnfold, AiOutlineMenuFold} from 'react-icons/ai';
import {MdKeyboardBackspace,} from 'react-icons/md';
import {BsArrowsExpand, BsArrowsCollapse} from 'react-icons/bs'
import {useNavigate } from 'react-router-dom';
import { ProfileContext } from '../Contexts/ProfileContext';
import { SlidesContext } from '../Contexts/SlidesContext';
import { DataContext } from '../Contexts/DataContext';
import NavBar from './NavBar';



export function Iframe () {
  const {picIndex, setIframe, setPicIndex, setViewProjectDetails, viewProjectDetails} = useContext(DataContext);
  const {setProfile,} = useContext(ProfileContext);
  

    const [projectLink, setProjectLink] = useState();
    const [loading, setLoading] = useState(true);
    const [showSideBar, setSideBar] = useState(false);
    const [showNavBar, setNavBar] = useState(true);
    const [mode, setMode] = useState(true);
    const [toggleLabel, setToggleLabel] = useState(false);
    const [toggleNav, setToggleNav] = useState(false);
    const [goBack, setGoback] = useState(false);
    const [barHeight, setBarHeight] = useState(true)


    const Navigation = useNavigate()

    useEffect(()=>{
      
    })  
     return(
      <>

      <div style={{width:'100%', height:'100vh', right:'0', }}>
      { (<iframe src={projectPics[picIndex]? projectPics[picIndex].link : ''} title='picture info' className='w-100 h-100' />) }
      <section className='text-dark d-none' 
       style={{position:'absolute', top:'0', right:'-35%', width:'33%', height:'100%'}}>
       {picIndex? 
         <div>
           <h3> {projectPics[picIndex]? projectPics[picIndex].name : ''} </h3>
         </div>
        : ''}
      </section>      
           <section /* IFRAME PROJECT DETAILS  */ className='py-2' 
            style={{top:'0', position:'absolute', right:'0', width:'34%', height:'100vh', zIndex:'-1',
              display:'grid', placeItems:'center', backgroundColor:'', overflowY:'auto'}}> 
              <ProjectDetails picIndex={picIndex}/>
           </section>
    </div> 
      </>
     )
  }