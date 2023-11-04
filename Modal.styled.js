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
background-color: #bbb;
z-index: 11;
padding: 15px;

@media(max-width: 768px){
    width: 90vw;
    right: 5%;
}

`;

export const ModalHeader = styled.h3`
`;

export const ModalBody = styled.div`
text-align: center;
`;

export const ModalFooter = styled.div`
border: none;
background-color: inherit;
text-align: end;
font-weight: bold;
font-size: 16px;
cursor: pointer;
    &:hover{
        color: red;
    };

`;