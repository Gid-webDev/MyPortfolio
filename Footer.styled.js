import styled from "styled-components";
import { Flex } from "./Container.Styled";

export const FooterContainer = styled.div`
width: 100%;
padding: 40px 80px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #111;
border-radius: 0 150px 0 0;

@media(max-width: 992px) {
    padding: 40px;
 };
 @media(max-width: 776px) {
    padding: 20px;
    background-color: #111;
    border-radius: 0px 100px 0px 0;
 };
 @media(max-width: 400px) {
    border-radius: 0px 0px 0px 0;
    padding: 8px;
 };

color: ${({textColor}) => textColor};
h2{
    font-size: 70px;
    color: #bbb;
    @media(max-width: 400px) {
        font-weight: 900;
        font-size: 45px;
     };
};
p{ 
    position: relative;
    width: 50%;
    bottom: -20px;
    font-size: 14px;
    font-weight: 100;
    color: #bbb;
    @media(max-width: 992px) {
        bottom: 0px;
        font-size: 13px;
        width: 100%;
     };
     @media(max-width: 576px) {
        color: ${({linksColor}) => linksColor};
     };
};
invite{
    font-size: 16px;
    font-weight: 100;
    color: #bbb;
    text-decoration: underline;
};
@media(max-width: 576px) {
    color: ${({linksColor}) => linksColor};
 };

linkContainer{
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: orangered;
    border-radius:5px;
    text-align: start;

     @media(max-width: 576px) {
        flex-direction: column;
        background-color: ;
        color: ${({textcolor}) => textcolor};
     };
};

email_cv{ 
    width: 100%;
    font-size: 15px; 
    color: ${({textcolor}) => textcolor};

    @media(max-width: 992px) {
    font-size: 15px;    
    text-align: start;
     };
     @media(max-width: 576px) {
        font-size: 15px;    
         };
};
platform{
    display: flex;

    @media(max-width: 576px) {
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: flex;
        text-align: start;
         }
};

column{
    display: flex;
    flex-direction: column;
    @media(max-width: 576px) {
        flex-direction: row;
     };
};

`
export const Links = styled.a`
    padding: 10px 30px;
    font-size: 30px;
    text-decoration: none;
    color: #111;
    transition: 0.6s;
    &:hover{
        transform: translateY(-10px);
        color: #111;
    };

    @media(max-width: 992px) {
        font-size: 25px;
        padding: 10px 0;
        margin-right: 35px;
    };
     @media(max-width: 576px) {
            font-size: 25px;
            margin-top: 10px;
            margin-right: 25px;
            color: ;
            &:hover{
                transform: translateY(-10px);
            }
        };
        
`