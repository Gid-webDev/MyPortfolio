import React, { useContext } from 'react'
import { socialLinks } from '../LinksData'
import { Links, FooterContainer} from '../STYLED.CONTAINER/Footer.styled'
import { DataContext } from '../Contexts/DataContext'

const SocialLinks = () => {
    const {textMode, selectedMode,  BGcolor, mode} = useContext(DataContext);

  return (
    <div>
    {socialLinks.map((link, index) => (
        <column > 
          <Links href={link.link} target='_blank' textcolor={BGcolor} >
            {link.name}
          </Links>  
           
        </column>
      ))}
    </div>
  )
}

export default SocialLinks
