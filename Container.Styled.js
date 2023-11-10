import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({bg}) => (bg)};
  color: ${({textColor}) => textColor};
  padding: 0 30px;
  border-radius: 0 150px 0px 0;

  @media(max-width: 576px) {
   border-radius: 0 100px 0px 0;
   font-size: 55px;
   font-weight: 800;
}

  h1{
    padding-top: 30px;
    font-size: 76px;
    z-index: 2;

   @media(max-width: 576px) {
       padding-top: 25px;
       font-size: 50px;
       font-weight: 800;
  }
  @media(max-width: 400px) {
   
    font-size: 40px;
    font-weight: 800;
 }
`;


export const Flex = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;

& > div,
& > ul {
    flex: 1;  
}
@media(max-width: 790px) {
    flex-direction: column;
 }
`

export const ImageStyles = styled.img`
top: -35px;
width: 405px;
position: relative;
z-index: 0;
border-radius: 10px;
transform: translateX(-60px);
rotate: -10deg;
transition: 0.6s;
 &:hover{
    rotate: 0deg;
    transition: 0.6s;
 }
@media(max-width: 790px) {
    top: -85px;
    width: 375px;
    rotate: 10deg;
    transform: translateX(-5px);
 }

 @media(max-width: 400px) {
    top: -85px;
    width: 290px;
    rotate: 10deg;
    transform: translateX(-0px);
 }
`

export const Text = styled.p`
color: #111;
display: flex;
align-items: ;
position: relative;
font-size: 18px;
z-index: 1;
font-weight: medium;
|
@media(max-width: 790px) {
    font-size: 15px;
 }
`

