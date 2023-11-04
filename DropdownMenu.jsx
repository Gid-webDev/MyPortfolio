import React, { useContext, useEffect, useState } from 'react'
import { menuList } from '../MenuData';
import { DataContext } from '../Contexts/DataContext'
import * as Styles from '../STYLED.CONTAINER/Menu.styled';
import { BiRightArrow } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from '../Contexts/ProfileContext'



const DropdownMenu = () => {
  const Navigation = useNavigate();
  
  const {selectedMode, BGcolor, setModal, setListItem, setMenuId} = useContext(DataContext);
  const {dropMenu, setDropMenu,} = useContext(ProfileContext)
  
  
  useEffect(()=> {
    
  })
  return (
    <>
      <Styles.menuStyled bg={selectedMode} textColor={BGcolor}>
        <ul>
           {menuList.map((ListItem, id)=> 
            
            <li key={id} onClick={()=> setModal(true, setListItem(ListItem.name), setMenuId(id), setDropMenu(false))}>
             <BiRightArrow className='fs-6 text-warning'/> &nbsp; {ListItem.name} <br/>
             <hr/>
           </li>)}
        </ul>
      </Styles.menuStyled>
      
    </>
  )
}

export default DropdownMenu
