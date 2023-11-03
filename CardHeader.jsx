import React, { useContext } from 'react'
import { CardHeaderStyles } from '../STYLED.CONTAINER/CardHeaderStyles';
import { DataContext } from '../Contexts/DataContext';

const CardHeader = () => {
    const {selectedMode, BGcolor, textMode} = useContext(DataContext)
  return (
    <> 
         <CardHeaderStyles color={textMode}> 
           <portfolio>portfolio</portfolio> 
           <br/>
           Featured works 
        </CardHeaderStyles>

    </>
  )
}

export default CardHeader
