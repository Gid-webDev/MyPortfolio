import React, { useContext } from 'react'
import * as PortfolioHeader from '../STYLED.CONTAINER/CardHeaderStyles';
import { DataContext } from '../Contexts/DataContext';
import { ProfileContext } from '../Contexts/ProfileContext';
import {motion, useInView, useAnimation} from 'framer-motion';




const CardHeader = () => {
    const {setModal, textMode} = useContext(DataContext)
    const {setProfile, showProfile} = useContext(ProfileContext)
  return (
    <motion.div
    variants={{
      hidden:{opacity: 1, x: -70},
      visible:{opacity: 1, x: 0}
    }}
    initial="hidden"
    whileInView="visible"
    transition={{duration: 0.5, delay: 0.25}}
    > 
         <PortfolioHeader.smallPortfolio color={textMode}>portfolio</PortfolioHeader.smallPortfolio>
         <PortfolioHeader.CardHeaderStyles color={textMode} onClick={()=>  setModal(false, setProfile(false))}> 
           
           <br/>
           Featured works 
        </PortfolioHeader.CardHeaderStyles>
    </motion.div>
  )
}

export default CardHeader
