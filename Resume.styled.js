import styled from "styled-components";

export const ResumeContainer = styled.div`
display: flex;
gap: 30px;
align-items: ;
justify-content: center
width: 100vw;
height: 100%;
margin: 80px 150px;
transition: 1s;
box-shadow: 0 0 3px 0;
img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
section{
    background-color: #0b0b25;
    color: #fff;
    padding: 50px 20px;
    min-width: 290px;
    box-shadow: 0 0 5px 0;

    
    @media(max-width: 760px){
        box-shadow: 0 0 5px 0;
    }
}
strong{
    font-size: 18px;
}
h3{
    font-size: 25px;
}
h6{
    font-size: 15px;
    padding: 10px 0;
}
li{
    font-size: 18px;
    padding: 10px;
}
div{
    color: #111;
    padding: 50px 20px;
    @media(max-width: 992px){
        box-shadow: 0 0 3px 0;
    };
};
@media(max-width: 992px){
    flex-direction: column;
    box-shadow: none;
    margin: 80px 100px;
    transition: 1s;
    section{
        min-width: 250px;
}
@media(max-width: 760px){
    margin: 50px;
    transition: 1s;
};
@media(max-width: 569px){
    margin: 15px;
    transition: 1s;
}
`;

export const ResumeNavBar = styled.section`
position: fixed;
top: 0;
right: 0;
padding: 15px;

button{
    border: none;
    outline: none;
    padding: 10px 14px;
    font-size: 18px;
    margin: 0 5px;
    transition: 0.5s;
    border-radius: 5px;
    &:hover{
        scale: 0.9;
        transition: 0.5s;
        color: #fff;
        background-color: #111;
    }
}

`