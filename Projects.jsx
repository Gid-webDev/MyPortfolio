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
    <div className='row position-absolute' style={{top:'50px', }}>

      <div /* HOME BUTTON */ className='position-fixed' style={{left:'90%', top:'5px'}}>
         <button className='btn btn-outline-dark fs-4' onClick={handleClick}> Home</button>
      </div> 
      {// CARDS RENDERING SECTION
        projectPics.map((project, projectId, selectedMode) => (
            <div className='col-lg-6 col-xs px-3 my-0' key={projectId} onSelect={()=> setProject(project)} 
             style={{scale:'', display:'flex', justifyContent:'center'}}>
              <Card project={project} projectId={projectId}/> 
            </div>
            
          ))}
      
    </div>
  )
}

export default Projects
