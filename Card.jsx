import React, { useContext, useEffect, useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from '../Contexts/ProfileContext';
import { DataContext } from '../Contexts/DataContext';

const Card = ({project, textMode, selectedMode, picIndex, setPicIndex, projectId, setIframe}) => {
  const Navigation = useNavigate()
  const {setProfile} = useContext(ProfileContext);
  const { picInfo, setNavBarOn, setModal} = useContext(DataContext)

  const [cardHover, setCardHover] = useState(false);
  const [btnOption, setBtnOption] = useState(false);
  const [hover, setHover] = useState(false)
  const hoverColor = hover ===true? textMode : 'blue';

  const cardStyles = hover ===true? { scale:'0.95', border:'none', } : { scale:'', border:'none',}

 

   useEffect(()=> {
     
   },[picIndex])
   
   

  return (
    <>

    <div className="card rounded-4 m-4 my-5"  style={{...cardStyles, transition:'0.5s', backgroundColor: selectedMode, color: textMode, }}
    onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)} onClick={()=>  setModal(false)}>
    <div className="row" onClick={()=>  setModal(false, setProfile(false))}>
      <div className="col-lg-7 col-sm-8 ">
        <img src={project.poster} className="img-fluid rounded-4" alt="..."/>
      </div>
      <div className="col-lg-5 col-sm-4 ">
        <div className="card-body">
          <h5 className="card-title fs-2">{project.name}</h5>
          <p className="card-text"> {project.Description} </p>
          <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          <button /* PROJECT BUTTON */
           className='btn  position-relative fs-5' style={{bottom:'0px', backgroundColor:textMode, color:selectedMode}} 
          onClick={() => btnOption ===true? setBtnOption(false) : setBtnOption(true)}> 
            {project.Title} <BiChevronUp/>
          </button>
           { // DROPDOWN  BUTTON FOR PROJECT's BUTTON
            btnOption&& 
            <div  className='position-absolute rounded-4 py-2 '
           style={{minWidth:'200px', justifyContent:'center', alignItems:'center', listStyle:'none',
            boxShadow: `0px 0px 3px 0px ${textMode}`, width:'', bottom:'45px',
             backgroundColor: selectedMode, display:'flex', flexDirection:'column'}}  onMouseLeave={()=> setBtnOption(false)}>
              
            <div /* BOTTON => OPEN PROJECT WITHIN APP */
             onClick={()=> setPicIndex(projectId, setIframe(true), setProfile(true, setNavBarOn(true)))} 
              className='fs-5 py-3 my-2 d-flex text-center' style={{color:textMode, lineHeight:'0.1', cursor:'pointer'}}>
               View project 
              </div>
                <hr style={{color: textMode, width:'100%', position:'absolute'}} /> 
              <div /* BUTTON => OPEN PROJECT IN A NEW TAB */ className='py-3 px-4 fs-5 my-2' 
              style={{color: textMode, lineHeight:'0.1', }} onMouseOver={()=> setHover(true) }>
                <a href={project.link} target='_blank' style={{color:textMode}} > Open in new tab</a>
              </div>
           </div>}
        </div>
      </div>
    </div>
  </div>
    
    </>
  )
}

export default Card
