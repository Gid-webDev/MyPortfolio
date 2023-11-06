import styled from "styled-components";

export const StyledModal = styled.div`
width: 50vw;
max-height: 60vh;
overflow-Y: auto;
position: fixed;
right: 25%;
top: 20%;
border-radius: 10px;
box-shadow: 0 0 3px 0;
background-color: #f9f9f9;
z-index: 11;
padding: 0px 20px;
hr{
    
}

@media(max-width: 768px){
    width: 90vw;
    right: 5%;
}

`;

export const ModalHeader = styled.h3`
 position: relative;
 top: 8px;
`;

export const ModalBody = styled.div`
text-align: center;
`;

export const ModalFooter = styled.strong`
border: none;
position: relative;
background-color: inherit;
right: -88%;
bottom: 8px;
border-radius: 5px;
font-weight: bold;
font-size: 17px;
cursor: pointer;
    &:hover{
        color: red;
    };

`;