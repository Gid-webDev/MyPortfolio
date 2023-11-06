import React from 'react'
import {BsFillTelephoneFill, BsSkype} from 'react-icons/bs'
import { ContactContainer, ListStyle, Email, SkypeId} from '../STYLED.CONTAINER/ContactDetails.styled'
import { MdEmail } from 'react-icons/md'

const ContactDetails = () => {
  return (
    <>
      <ContactContainer>
        <ListStyle>
          <Email> <span> <MdEmail/> </span> gid.webdev.pro@gmail.com </Email>
        </ListStyle>
        <ListStyle>
          <phoneNumber> <span> <BsFillTelephoneFill/> </span> +234-7031523129 </phoneNumber>
        </ListStyle>
        <ListStyle>
        <SkypeId> <span> <BsSkype/> </span> live:.cid.ae93f69a57558b3c </SkypeId>
      </ListStyle>
      </ContactContainer>
       
    </>
  )
}

export default ContactDetails
