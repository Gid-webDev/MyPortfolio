import React, { useContext } from 'react'
import * as FooterStyles from '../STYLED.CONTAINER/Footer.styled'
import { DataContext } from '../Contexts/DataContext'
import { Flex } from '../STYLED.CONTAINER/Container.Styled'
import { Links } from '../STYLED.CONTAINER/Footer.styled'
import { useNavigate } from 'react-router-dom'
import {socialLinks} from '../LinksData'
import { ProfileContext } from '../Contexts/ProfileContext'
import { motion } from 'framer-motion' 




const Footer = () => {
    const Navigation = useNavigate()
    const {selectedMode,  BGcolor, mode, setModal} = useContext(DataContext)
    const {setProfile, showProfile} = useContext(ProfileContext)
  

  return (
    <FooterStyles.FooterContainer bg={BGcolor} linksColor={selectedMode} textcolor={BGcolor} onClick={()=>  setModal(false, setProfile(false))}>
      <Flex>
        <motion.h2
        variants={{
          hidden:{opacity: 0, x: -100},
          visible:{opacity: 1, x: 0}
        }}
        initial="hidden"
        whileInView="visible" 
        transition={{duration: 0.6, delay: 0.2}}
        >
         LET'S GET IN TOUCH
        </motion.h2>
        <motion.p
        variants={{
          hidden:{opacity: 1, x: -50},
          visible:{opacity: 1, x: 0}
        }}
        initial="hidden"
        whileInView="visible" 
        transition={{duration: 0.6, delay: 0.4}}
        >
           Got a project? Drop me a line if you want us to work together on something
           exciting, Big or small, Mobile or web. 
           <br/>
           <br/>
           <invite> Let's Discuss Your Project</invite>
           
        </motion.p>
      </Flex> 

      <linkContainer>
        <email_cv>
         <a onClick={()=> Navigation("/Resume", )} className={mode? 'btn btn-dark' : 'btn btn-light'} >Get Resume</a> <br/>
         <br/>
         gid.webdev.pro@gmail.com
        </email_cv>
     <platform>
        {socialLinks.map((link, index) => (
          <column > 
            <Links href={link.link} target='_blank' textcolor={BGcolor} >
              {link.name}
            </Links>  
             
          </column>
        ))}
     </platform> 
      </linkContainer>
    </FooterStyles.FooterContainer>
  )
}

export default Footer
