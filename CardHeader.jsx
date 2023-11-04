import React, { useContext } from 'react'
import { CardHeaderStyles } from '../STYLED.CONTAINER/CardHeaderStyles';
import { DataContext } from '../Contexts/DataContext';

const CardHeader = () => {
    const {setModal, textMode} = useContext(DataContext)
  return (
    <> 
         <CardHeaderStyles color={textMode} onClick={()=>  setModal(false)}> 
           <portfolio>portfolio</portfolio> 
           <br/>
           Featured works 
        </CardHeaderStyles>

    </>
  )
}

export default CardHeader
