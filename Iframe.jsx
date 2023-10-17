import React, { Children, useCallback, useEffect, useRef, useState } from 'react';
import { projectPics } from '../portfolioPic';
import Button from './Button';


export function Iframe ({sharePicInfo, setsharePicInfo}) {
    const [projectLink, setProjectLink] = useState()
    const [loading, setLoading] = useState(true);
    setsharePicInfo = ('')
  
    useEffect(()=>{
    },[sharePicInfo])
  
     return(
      <div style={{width:'100vw', height:'100%', right:'10vw', }}>
        {projectPics[sharePicInfo].link? <iframe src={sharePicInfo? projectPics[sharePicInfo].link : ''}  
        title='picture info' className='w-100 h-100 bg-black' /> : <h4 className='text-light'>Loading</h4>}
        <section className='text-dark d-none' 
         style={{position:'absolute', top:'0', right:'-35%', width:'33%', height:'100%'}}>
         {sharePicInfo? 
           <div>
             <h3>{projectPics[sharePicInfo].name}</h3>
           </div>
          : ''}
        </section>
      </div>  
     )
  }