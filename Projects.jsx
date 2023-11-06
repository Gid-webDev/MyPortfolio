import React, { useContext } from 'react';
import { projectPics } from '../portfolioPic';
import { DataContext } from '../Contexts/DataContext';
import Card from './Card';
import { useNavigate } from 'react-router-dom';


const Projects = () => {
    const Navigation = useNavigate()
    const handleClick = () => Navigation('/')
    const {setProject, textMode, selectedMode, ProfileAnimated} = useContext(DataContext)


  return (
    <div className='row position-absolute' style={{top:'0px', }}>

      <div /* HOME BUTTON */ className='position-absolute' style={{left:'88%', top:'35px', zIndex:'1000'}}>
         <button className='btn btn-outline-light fs-4 z-1' onClick={handleClick}> Home</button>
      </div> 
      <iframe src="https://drive.google.com/file/d/1o3APWd1xyuNUAt4LRYWLzilArnSWo4nM/preview" style={{width:'100vw', height:'100vh', allow:'autoplay', zIndex:'0'}}>
      </iframe>
      
    </div>
  )
}

export default Projects
