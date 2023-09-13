
import React, { useEffect, useRef, useState } from 'react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'


const Slides = ({}) => {
  
    const myImages = [
      {  "id": 1,
         "link": "https://kingweather.netlify.app/",
          "image": "portfolioPic/weatherApp.png"
        },  
      {  "id": 2,
         "link": "https://moviesblocks.netlify.app/",
          "image": "portfolioPic/portfolioPage.png"
        },
      {  "id": 3,
         "link": "https://moviesblocks.netlify.app/",
          "image": "portfolioPic/movieBlockPhone.png"
        }, 
      {  "id": 4,
         "link": "https://moviesblocks.netlify.app/",
          "image": "portfolioPic/movieIpad.png"
        }, 
        {  "id": 5,
         "link": "https://kingweather.netlify.app/",
          "image": "portfolioPic/weatheNewYork.png"
        },
      {  "id": 6,
         "link": "https://webdev-pro.netlify.app/",
          "image": "portfolioPic/Business.png"
        }    
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
      }, 5000)

      return () => clearTimeout(timeRef.current)
    })

    const SlideContainer = {maxwidth:'100%', height:'100%',}

    const SlidesStyles = {width:'100%', height:'100vh', borderRadius:'10px',
    color:'white', position:'relative', backgroundRepeat:'no-repeat', backgroundPosition:'center',
    transition:'1.5s', scale:'0.85',
    backgroundImage: `url(${images[currentSlide].image})`
  } 
  const SlidesBtn = {position:'absolute', color:'white', top:'50%', fontWeight:'100', 
  zIndex:'5', cursor:'pointer', backgroundColor:'rgba(0, 0, 0, 0.8)',
  width:'50px', height:'30px ', padding:'3px', borderRadius:'5px'
}
  const DotContainer = {
    position:'absolute', bottom:'40px', display:'flex', 
  position:'relative', justifyContent:'center', alignItems:'center',
}
  const DotStyle = {
    height:'20px', width:'20px', borderRadius:'50%', display:'flex', 
    color:'', margin:'0 8px', cursor:'pointer', scale:'1.2', 
    backgroundColor:' #ddd',
  }
  
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

  const GoToImage = (index) => {
    setCurrentSlide(index)
  }
  
   return (
    <> 
      <div id='slidesContainer' style={SlideContainer}>
      {/* Previous */}
      <BsChevronLeft style={{...SlidesBtn, left:'8px'}} onClick={ToPrev} id='SlidesBtnTransition'/>
      {/* Next */}
      <BsChevronRight style={{...SlidesBtn, right:'8px'}} onClick={ToNext} id='SlidesBtnTransition'/>
      {/* slides */}
       <div style={SlidesStyles} > </div>
       {/* dots */}
       <div style={DotContainer}>
        {images.map((image, index)=> (<div key={image.id}  style={DotStyle} id='DotStyle'
          onClick={()=> GoToImage(index)}></div>))}
       </div>
      
      </div>
    </>
   )
  

}

export default Slides
