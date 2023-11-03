import styled from "styled-components";

export const CardHeaderStyles = styled.h6`
 font-size: 80px;
 font-weight: 800;
 position: relative;
 color: ${({color}) => color};
 padding: 10px 40px;
 @media(max-width: 768px) {
    font-weight: 900;
    font-size: 55px;
 };
 @media(max-width: 576px) {
    font-weight: 900;
    font-size: 50px;
 };
 @media(max-width: 400px) {
   font-weight: ;
   font-size: 44px;
   padding: 5px 10px;
};

 };
 portfolio{
    font-size: 25px;
    position: absolute;
    font-weight: 500;
    top: 75px;
    @media(max-width: 768px) {
      font-weight: ;
      top: 55px;
   };
    @media(max-width: 576px) {
        font-weight: ;
        top: 50px;
     };
     @media(max-width: 400px) {
      font-size: 25px;
      top: 30px;
   }
 }
`