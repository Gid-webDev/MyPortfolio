import styled from 'styled-components';

export const UserRes_Container = styled.div`
button{
    border: none;
    padding: 0 10px;
    background-color: transparent;
    color: ${({color}) => color};
};
  
`;

 export const commentBox = styled.section`
 width: 55vw;
 
 @media(max-width: 769px){
    width: 75vw;
 }

 @media(max-width: 569px){
    width: 90vw;
 }
 `;