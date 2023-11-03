import styled from "styled-components";

export const SlidesSection = styled.section`
 background-color: ${({bg}) => bg};
 position: relative;
 max-height: 75vh;
 width: 100%;
 display: flex;
 over-flow: hidden;
 
 top: 0;

 @media(max-width: 350px){
    max-height: 100vh;
    align-items: center;
`
;