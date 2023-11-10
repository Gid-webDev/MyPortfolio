import styled from "styled-components";

export const serviceContainer = styled.section`
width: 100%;
display: flex;
gap: 40px;
position: relative;
background-color: ${({bg})=> bg};
color: ${({textColor})=> textColor};
align-items: center;
justify-content: space-around;
padding: 0 60px;
border-radius: 0 0px 0 200px;

@media(max-width:576px){
    padding: 0 20px;
    border-radius: 0 0 0 100px;
}
span{
    font-size: 13px;
    font-weight: 100;
};

h6{
    font-size: 65px;
    font-weight: 800;
    @media(max-width: 400px){
        font-size: 40px;
    };
};
li{
    position: relative;
    display: flex;
    list-style: none;
    font-size: 30px;
    font-weight: 700;
    left: -15px;
    @media(max-width: 576px){
        font-size: 30px;
        font-weight: 500;
    };
    @media(max-width: 400px){
        font-size: 25px;
        font-weight: 500;
    }
    
};
p{  
    min-width: 370px;
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 400px){
        min-width: 200px;
    }
};

rightArrow{
    font-size: 18px;
    cursor: pointer;
    transition: 0.4s;
    &:hover{
        rotate: -30deg;
        scale: 1.8;
        color: red;
        transition: 0.6s;
    };
};
@media(max-width: 992px ) {
    flex-direction: column;
    p{  
        width: 75vw;
        padding: 15px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    };
}

`;