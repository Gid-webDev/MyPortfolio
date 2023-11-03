import React, { useContext } from 'react'
import * as FooterStyles from '../STYLED.CONTAINER/Footer.styled'
import { DataContext } from '../Contexts/DataContext'
import { Flex } from '../STYLED.CONTAINER/Container.Styled'
import { Links } from '../STYLED.CONTAINER/Footer.styled'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const Navigation = useNavigate()
    const {textMode, selectedMode,  BGcolor, mode} = useContext(DataContext)
    const socialLinks = [
    { "id": 1,
      name: <AiFillGithub/>, 
     link: "https://github.com/Gid-webDev"
  },
    { "id": 2,
      name: <AiFillLinkedin/>, 
    link: "https://www.linkedin.com/in/gideon-nwabueze-83840b281/"
  },
    { "id": 3,
      name: <AiOutlineTwitter/>, 
     link: "https://twitter.com/gid2gid?s=11&t=GbRBhIv6Ws3cplWUbCrU4Q"
  },
    { "id": 4,
      name: <AiFillFacebook/>, 
     link: "https://web.facebook.com/Gidddy"
  },
    { "id": 5,
      name: <AiOutlineWhatsApp/>,
     link: "https://wa.me/2347031523129", 
     label: "Chat on WhatsApp"
    }
    
    ]

   


  return (
    <FooterStyles.FooterContainer bg={BGcolor} linksColor={selectedMode} textcolor={BGcolor}>
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
         <a onClick={()=> Navigation("/Resume")} className={mode? 'btn btn-dark' : 'btn btn-light'} >Get Resume</a> <br/>
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
