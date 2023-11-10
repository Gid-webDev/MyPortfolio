import styled from "styled-components";

export const container_styled = styled.section`
position: relative;
height:100%:
width:100%;
border-radius:200px 0 150px 0;
background-color: ${({bg})=> bg};

@media(max-width: 776px){
    border-radius: 0px 0 0px 0px;
}
`;