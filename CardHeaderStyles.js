import styled from "styled-components";

export const CardHeaderStyles = styled.strong`
 font-size: 85px;
 position: relative;
 color: ${({color}) => color};
 padding: 10px 40px;
 @media(max-width: 768px) {
    font-weight: ;
    font-size: 70px;
 };
 @media(max-width: 576px) {
    font-size: 55px;
 };
 @media(max-width: 400px) {
   font-size: 50px;
   padding: 25px 10px;
};
@media(max-width: 350px) {
   font-size: 42px;
   padding: 25px 10px;
};

 };

 }
`;
 export const smallPortfolio = styled.small`
    color: ${({color}) => color};
    font-size: 20px;
    position: relative;
    font-weight: 100;
    padding: 20px;
    top: -22px;
    left: -15px;
   
    @media(max-width: 576px) {
      font-size: 20px;
      top: -10px;
     `;