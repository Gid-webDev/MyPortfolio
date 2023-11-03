import React, { useContext } from 'react'
import { DataContext } from '../Contexts/DataContext'
import * as Styledservices  from '../STYLED.CONTAINER/Service.styled';
import { BsArrow90DegRight, BsArrowRight } from 'react-icons/bs';
import { BiRightArrow } from 'react-icons/bi';

const Services = () => {
    const {BGcolor, textMode, selectedMode} = useContext(DataContext);
  return (
    <>
      <Styledservices.serviceContainer bg={BGcolor} textColor={selectedMode}>
       <div>
         <h6> 
          <span>SERVICES</span> <br/>
          What I do for my clients
          </h6>
         <span>Compelling repurpose covalent core competence <br/> for top-line paradim</span>
       </div>
       <div>
          <ul>
             <li>  
               <span>01</span> 
               <p> Website design  <rightArrow> <BiRightArrow/> </rightArrow>  </p>
             </li>
             <li> 
               <span>02</span> 
               <p>  Landing page  <rightArrow> <BiRightArrow/> </rightArrow>  </p> 
             </li>
             <li>
             <span>03</span> 
             <p>  Blogs  <rightArrow> <BiRightArrow/> </rightArrow>  </p>
           </li>
             <li>
               <span>04</span> 
               <p>  Web apps  <rightArrow> <BiRightArrow/> </rightArrow>  </p>
             </li>
             <li> 
               <span>05</span> 
               <p> Mobile apps  <rightArrow> <BiRightArrow/> </rightArrow>  </p>
             </li>
             <li>
               <span>06</span> 
               <p>  UI/UX design  <rightArrow> <BiRightArrow/> </rightArrow>  </p>
             </li>
          </ul>
       </div>
      </Styledservices.serviceContainer>
      
    </>
  )
}

export default Services
