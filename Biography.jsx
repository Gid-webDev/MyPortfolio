import React, { useContext } from 'react'
import * as BiographyStyles from '../STYLED.CONTAINER/Container.Styled'
import { ProfileContext } from '../Contexts/ProfileContext'
import { DataContext } from '../Contexts/DataContext'
import {motion, useInView, useAnimation} from 'framer-motion';


const Biography = () => {
  const {setModal, selectedMode,  BGcolor} = useContext(DataContext);
  const {setProfile, showProfile} = useContext(ProfileContext)
  return (
    <>
    <BiographyStyles.Container bg={BGcolor} textColor={selectedMode} onClick={()=>  setModal(false, setProfile(false))}>
      <motion.h1
      variants={{
        hidden:{opacity: 0, y: 100},
        visible:{opacity: 1, y: 0}
      }}
      initial="hidden"
      whileInView="visible" 
      transition={{duration: 0.8, delay: 0.25}}
      > 
       My journey as a software Developer
      </motion.h1>
      <BiographyStyles.Flex>
      <motion.div className='ui bottom pointing label fs-4 text-light bg-white-50 rounded-4 z-1'
       variants={{
         hidden:{opacity: 1, y: 75},
         visible:{opacity: 1, y:0}
       }}
       initial="hidden"
       whileInView="visible" 
       transition={{duration: 0.5, delay: 0.25}}
      >
       <BiographyStyles.Text textColor={selectedMode} > 
        Honestly my journey as a frontEnd developer has been that of determination 
        amidst all level of faustration and focus on the goal even when the goal 
        post seems to move further away from reach, at my every attempt to score a
        goal, but I can finally say I'm a frontEnd developer having the MERN stack within 
        my grasp in less than two years after I wrote my first "hello world". &nbsp;
        May I summerize by saying "The journey is now more gratifying and the learning more intriguing",
        I look forward to working & learning from you. <br/>
        cheers!
        </BiographyStyles.Text>
      </motion.div>
       

        <BiographyStyles.ImageStyles src='gid.jpg' alt=''/>

      </BiographyStyles.Flex>
     </BiographyStyles.Container>
    
      
    </>
  )
}

export default Biography
