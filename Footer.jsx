import React, { useContext } from 'react'
import * as FooterStyles from '../STYLED.CONTAINER/Footer.styled'
import { DataContext } from '../Contexts/DataContext'
import { Flex } from '../STYLED.CONTAINER/Container.Styled'
import { Links } from '../STYLED.CONTAINER/Footer.styled'
import { useNavigate } from 'react-router-dom'
import {socialLinks} from '../LinksData'

const Footer = () => {
    const Navigation = useNavigate()
    const {selectedMode,  BGcolor, mode, setModal} = useContext(DataContext)
   

   


  return (
    <FooterStyles.FooterContainer bg={BGcolor} linksColor={selectedMode} textcolor={BGcolor} onClick={()=>  setModal(false)}>
      <Flex>
        <h2> LET'S GET IN TOUCH </h2>
        <p>
           Got a project? Drop me a line if you want us to work together on something
           exciting, Big or small, Mobile or web. 
           <br/>
           <br/>
           <invite> Let's Discuss Your Project</invite>
           
        </p>
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
