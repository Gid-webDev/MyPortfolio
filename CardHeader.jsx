import React, { useContext } from 'react'
import { CardHeaderStyles } from '../STYLED.CONTAINER/CardHeaderStyles';
import { DataContext } from '../Contexts/DataContext';
import { ProfileContext } from '../Contexts/ProfileContext';
const CardHeader = () => {
    const {setModal, textMode} = useContext(DataContext)
    const {setProfile, showProfile} = useContext(ProfileContext)
  return (
    <> 
         <CardHeaderStyles color={textMode} onClick={()=>  setModal(false, setProfile(false))}> 
           <portfolio>portfolio</portfolio> 
           <br/>
           Featured works 
        </CardHeaderStyles>

    </>
  )
}

export default CardHeader
