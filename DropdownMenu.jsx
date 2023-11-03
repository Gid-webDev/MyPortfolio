import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Contexts/DataContext'
import * as Styles from '../STYLED.CONTAINER/Menu.styled';
import { BiRightArrow } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';


const DropdownMenu = () => {
  const Navigation = useNavigate();
  const [MenuListItem, setListItem] = useState({})
  const {selectedMode, textMode, BGcolor} = useContext(DataContext);

  const menuList = [
    {"name": "About Gideon", "id": 1, "link": ""}, 
  {"name": "My Projects", "id": 2, "link": "Projects"},
  {"name": "View Resume", "id": 3, "link": "Resume"}, 
  {"name": "Contact Details", "id": 4, "link": ""}, 
  {"name": "Follow Me", "id": 5, "link": ""},]

  useEffect(()=> {
    
  })
  return (
    <>
      <Styles.menuStyled bg={selectedMode} textColor={BGcolor}>
        <ul>
           {menuList.map((ListItem, id)=> 
            
            <li key={id} onClick={()=> alert('disabled')}>
             <BiRightArrow className='fs-6 text-warning'/> &nbsp; {ListItem.name} <br/>
             <hr/>
           </li>)}
        </ul>
      </Styles.menuStyled>
      
    </>
  )
}

export default DropdownMenu
