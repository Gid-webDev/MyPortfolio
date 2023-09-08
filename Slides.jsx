
import React, { useEffect, useRef, useState } from 'react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'


const Slides = ({}) => {
  
    const myImages = [
      {  "id": 1,
          "image": "portfolioPic/weatherApp.png"}, 
      {  "id": 2,
          "image": "portfolioPic/weatheNewYork.png"}, 
      {  "id": 3,
          "image": "portfolioPic/movieblocksTab.png"},
      {  "id": 4,
          "image": "portfolioPic/movieBlockPhone.png"}, 
      {  "id": 5,
          "image": "portfolioPic/moviesLightmode.png"},
      {  "id": 6,
          "image": "portfolioPic/movieblocksPc.png"}, 
      {  "id": 7,
          "image": "portfolioPic/lightmodePc.png"},
      {  "id": 8,
          "image": "portfolioPic/bootstrapStyleTablet.png"}    
     ]  
  


    const [currentSlide, setCurrentSlide] = useState(0);
    const [images, setImage] = useState(myImages);
    const timeRef = useRef(null)

    useEffect(()=>{
      if (timeRef.current){
        clearTimeout(timeRef.current)
      }
      timeRef.current = setTimeout(()=>{
        ToNext();
      }, 4000)

      return () => clearTimeout(timeRef.current)
    })

    const SlideContainer = {padding:'0px 10px', width:'100%', height:'100%',}

    const SlidesStyles = {width:'100%', height:'100%', borderRadius:'10px',
    color:'white', position:'relative', backgroundRepeat:'no-repeat', backgroundPosition:'center',
    transition:'1.5s',
    backgroundImage: `url(${images[currentSlide].image})`
  }
  const SlidesBtnLeft = {position:'absolute', color:'white', top:'50%', fontWeight:'100', 
  zIndex:'5', left:'5px', cursor:'pointer', backgroundColor:'rgba(0, 0, 0, 0.8)',
  width:'50px', height:'30px ', padding:'3px', borderRadius:'5px' }
  
  const SlidesBtnRight = {position:'absolute', color:'white', top:'50%', fontWeight:'100', 
  zIndex:'5',  right:'30px', cursor:'pointer', backgroundColor:'rgba(0, 0, 0, 0.8)',
  width:'50px', height:'30px ', padding:'3px', borderRadius:'5px'}

  const DotContainer = {position:'absolute', bottom:'50px', display:'flex', 
  position:'relative', justifyContent:'center', alignItems:'center',}
  const DotStyle = {height:'20px', width:'20px', borderRadius:'50%', 
  display:'flex', color:'rgba(255, 255, 255, 0.6)', margin:'0 5px', cursor:'pointer',
  scale:'0.9', backgroundColor:' #bbb' }
  
  const ToPrev = () =>{
    const FirstSlide = currentSlide === 0;
    const NewIndex = FirstSlide? images.length - 1 : currentSlide - 1;
    setCurrentSlide(NewIndex);
  }
  const ToNext = ()=>{
    const LastSlide = currentSlide === images.length - 1;
    const NewIndex = LastSlide? 0 : currentSlide + 1
    setCurrentSlide(NewIndex);
  }

  const GoToImage = (image) => {
    setCurrentSlide(image)
  }
  
   return (
    <> 
      <div id='slidesContainer' style={SlideContainer}>
      {/* Previous */}
      <BsChevronLeft style={SlidesBtnLeft} onClick={ToPrev} id='SlidesBtnTransition'/>
      {/* Next */}
      <BsChevronRight style={SlidesBtnRight} onClick={ToNext} id='SlidesBtnTransition'/>
      {/* slides */}
       <div style={SlidesStyles} >
        
       </div>
       {/* dots */}
       <div style={DotContainer}>
        {images.map((image)=> (<div key={image.id}  style={DotStyle}
          onClick={()=> GoToImage(image.id)}></div>))}
       </div>
      
      </div>
    </>
   )
  

}

export default Slides
