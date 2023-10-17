import React, { Children, useCallback, useEffect, useRef, useState } from 'react';
import { projectPics } from '../portfolioPic';
import {BsBoxArrowUpRight} from 'react-icons/bs'

const ProjectDetails = ({sharePicInfo, setsharePicInfo}) => {
  return (
    <>
     <div style={{display:'grid', placeItems:'center', height:'100%', width:'100%', }}>
        <div style={{width:'200px', height:'300px', padding:'0px', }}>
            <img src={projectPics[sharePicInfo].image} alt='' className='img-fluid' />
        </div>
        <div id='text' className='py-2 text-light'
        style={{backgroundColor:'rgba(1, 1, 1, 0.8)', display:'grid', placeItems:'center', textAlign:'center', position:'relative', bottom:'-10px'}}>
          <div className='p-3'>
            <strong className='fs-4'>{projectPics[sharePicInfo].name}</strong>
            <p> {projectPics[sharePicInfo].Description} </p>
          </div> 
         <div /* BUILDING TOOLS */
             style={{overflow:'scroll', display:'flex', maxWidth:'100%', padding:'0 15px'}}>
             {projectPics[sharePicInfo].Technologies.map((tech)=> (<button key={tech} 
             className='btn btn-light rounded-1 mx-2'>
             {tech} </button>))}
         </div>
         <strong>
           <button /* VISIT LINK IN ANOTHER TAB */    href={projectPics[sharePicInfo].link} target='_blank'
             className='btn btn-outline-light mt-1 rounded-1 fs-6 d-flex align-items-center justify-content-between'> 
             <span className='mx-1'> {projectPics[sharePicInfo].Title} </span> <BsBoxArrowUpRight className='mx-1'/>
           </button>
         </strong> 
         
         <footer className='py-2'>
            <strong> Data fetched from {projectPics[sharePicInfo].Api} </strong>
         </footer>
       </div>
     </div>
    
    
    </>
  )
}

export default ProjectDetails
