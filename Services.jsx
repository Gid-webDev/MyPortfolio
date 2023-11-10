import React, { useContext } from 'react'
import { DataContext } from '../Contexts/DataContext'
import * as Styledservices  from '../STYLED.CONTAINER/Service.styled';
import { BsArrow90DegRight, BsArrowRight } from 'react-icons/bs';
import { BiRightArrow } from 'react-icons/bi';
import {motion, useInView, useAnimation} from 'framer-motion';





const Services = () => {
    const {BGcolor, textMode, selectedMode} = useContext(DataContext);
  return (
    <>
      <Styledservices.serviceContainer bg={BGcolor} textColor={selectedMode}>
       <motion.div
       variants={{
        hidden:{opacity: 1, x: -40},
        visible:{opacity: 1, x: 0}
       }}
       initial="hidden" 
       whileInView="visible"
       transition={{duration: 0.5, delay: 0.25}}
       >
         <h6> 
          <span>SERVICES</span> <br/>
          What I do for my clients
          </h6>
         <span>Compelling repurpose covalent core competence <br/> for top-line paradim</span>
       </motion.div>
       <div>
          <ul>
             <motion.li
             variants={{
              hidden:{opacity: 0.2, x: 40},
              visible:{opacity: 1, x: 0}
             }}
             initial="hidden" 
             whileInView="visible"
             transition={{duration: 0.6, delay: 0.25}}
             >  
               <span>01</span> 
               <p> Website design  <rightArrow> <BiRightArrow/> </rightArrow>  </p>
             </motion.li>
             <motion.li
             variants={{
              hidden:{opacity: 0.2, x: 40},
              visible:{opacity: 1, x: 0}
             }}
             initial="hidden" 
             whileInView="visible"
             transition={{duration: 0.9}}
             > 
               <span>02</span> 
               <p>  Landing page  <rightArrow> <BiRightArrow/> </rightArrow>  </p> 
             </motion.li>
             <motion.li
             variants={{
              hidden:{opacity: 0.2, x: 40},
              visible:{opacity: 1, x: 0}
             }}
             initial="hidden" 
             whileInView="visible"
             transition={{duration: 0.9}}
             >
             <span>03</span> 
             <p>  Blogs  <rightArrow> <BiRightArrow/> </rightArrow>  </p>
           </motion.li>
             <motion.li
             variants={{
              hidden:{opacity: 0.2, x: 40},
              visible:{opacity: 1, x: 0}
             }}
             initial="hidden" 
             whileInView="visible"
             transition={{duration: 0.9}}
             >
               <span>04</span> 
               <p>  Web apps  <rightArrow> <BiRightArrow/> </rightArrow>  </p>
             </motion.li>
             <motion.li
             variants={{
              hidden:{opacity: 0.2, x: 40},
              visible:{opacity: 1, x: 0}
             }}
             initial="hidden" 
             whileInView="visible"
             transition={{duration: 0.9}}
             > 
               <span>05</span> 
               <p> Mobile apps  <rightArrow> <BiRightArrow/> </rightArrow>  </p>
             </motion.li>
             <motion.li
             variants={{
              hidden:{opacity: 0.2, x: 40},
              visible:{opacity: 1, x: 0}
             }}
             initial="hidden" 
             whileInView="visible"
             transition={{duration: 0.9}}
             >
               <span>06</span> 
               <p>  UI/UX design  <rightArrow> <BiRightArrow/> </rightArrow>  </p>
             </motion.li>
          </ul>
       </div>
      </Styledservices.serviceContainer>
      
    </>
  )
}

export default Services
