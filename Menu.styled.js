import styled from "styled-components";

export const menuStyled = styled.div`
 background-color: ${({bg}) => bg};
 color: ${({textColor}) => textColor};
 box-shadow: 0 0 1px 0 ${({textColor}) => textColor};
 padding: 40px 0;
 width: 270px;
 li{
    padding: 10px 0;
    list-style: none;
    font-size: 20px;
    text-align: start;
    cursor: pointer;
    &:hover{
        color: goldenrod;
    }
 }
`;