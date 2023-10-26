import React, { useContext, useEffect, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from '../Contexts/ProfileContext';
import { DataContext } from '../Contexts/DataContext';

const Card = ({project, textMode, selectedMode, picIndex, setPicIndex, projectId, setIframe}) => {
  const Navigation = useNavigate()
  const {setProfile} = useContext(ProfileContext);
  const { picInfo, setNavBarOn} = useContext(DataContext)

  const [cardHover, setCardHover] = useState(false);
  const [btnOption, setBtnOption] = useState(false);
  const [hover, setHover] = useState(false)
  const hoverColor = hover ===true? textMode : 'blue'

  const cardContainer = cardHover?  {maxWidth: '800px', boxShadow:`0px 0px 3px ${textMode}`, 
  transform:'translateY(-8px)', transition: ' 0.8s',}  : 
   {maxWidth: '800px', boxShadow:`0px 0px 3px ${textMode}`}

   useEffect(()=> {
     
   },[picIndex])
   
   

  return (
    <>

    <div className="card rounded-4 my-4"  style={{...cardContainer, cursor:'pointer', scale:'',}}
    onMouseOver={()=> setCardHover(true)} onMouseLeave={()=> setCardHover(false)}>
    <div className="row">
      <div className="col-lg-7 col-sm-8 ">
        <img src={project.poster} className="img-fluid rounded-4" alt="..."/>
      </div>
      <div className="col-lg-5 col-sm-4 ">
        <div className="card-body">
          <h5 className="card-title fs-2">{project.name}</h5>
          <p className="card-text"> {project.Description} </p>
          <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          <button /* PROJECT BUTTON */
           className='btn btn-primary position-relative fs-5' style={{bottom:'0px'}} 
          onClick={() => btnOption ===true? setBtnOption(false) : setBtnOption(true)}> 
            {project.Title} <BiChevronDown/>
          </button>
           { // DROPDOWN  BUTTON FOR PROJECT's BUTTON
            btnOption&& 
            <ul  className='position-absolute rounded-4 py-2'
           style={{minWidth:'200px', justifyContent:'center', alignItems:'center', listStyle:'none',
            boxShadow: `1px 1px 4px ${textMode}`, width:'', bottom:'45px',
             backgroundColor: selectedMode,}}  onMouseLeave={()=> setBtnOption(false)}>
              
            <li /* BOTTON => OPEN PROJECT WITHIN APP */
             onClick={()=> setPicIndex(projectId, setIframe(true), setProfile(true, setNavBarOn(false)))} 
              className='fs-4 py-3 d-flex' style={{color:textMode, lineHeight:'0.1'}}>
               View project 
              </li>
               <li> <hr style={{color: textMode, width:'100%'}} /> </li>
              <li /* BUTTON => OPEN PROJECT IN A NEW TAB */ className='py-3 fs-4' 
              style={{color: textMode, lineHeight:'0.1', }} onMouseOver={()=> setHover(true) }>
                <a href={project.link} target='_blank' style={{color:textMode}} > Open in new tab</a>
              </li>
           </ul>}
        </div>
      </div>
    </div>
  </div>
    
    </>
  )
}

export default Card
