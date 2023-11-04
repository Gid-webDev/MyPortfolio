import React, { useContext, useState } from 'react'
import * as modal from '../STYLED.CONTAINER/Modal.styled'
import { DataContext } from '../Contexts/DataContext'
import ProjectDetails from './ProjectDetails';
import SocialLinks from './SocialLinks';
import AboutMe from './AboutMe';
import { useNavigate } from 'react-router-dom';
import { CV_Btn } from './Resume';

const Modal = () => {
    const Navigation = useNavigate();
    const {showModal, setModal, MenuListItem, menuId, setMenuId} = useContext(DataContext);

    const ModalData =  {
      "id" : 1, "header": MenuListItem,
      "body": [
      {"id": 1, "name": <AboutMe/>},
      {"id": 2, "name": "Projects"},
      {"id": 3, "name": <CV_Btn/>},
      {"id": 4, "name": "ContactDetails"},
      {"id": 5, "name": <SocialLinks/>}
  ], 
      "footer": "Close"
  }
    
  return (
    <>
      {showModal&& 
        <modal.StyledModal>
          <modal.ModalHeader>
             {ModalData.header} 
          </modal.ModalHeader>
          <modal.ModalBody>
            <div> {ModalData.body[menuId].name} </div>
          </modal.ModalBody>
          <modal.ModalFooter onClick={()=> setModal(false)}>
            {ModalData.footer}
          </modal.ModalFooter>
       </modal.StyledModal>
     }
      
    </>
  )
}

export default Modal
