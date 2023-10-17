import React, { Children, useCallback, useEffect, useRef, useState } from 'react';
import { projectPics } from '../portfolioPic';
import {BsCaretRightFill, BsCaretLeftFill} from 'react-icons/bs'
import Button from './Button';
import { Iframe } from './Iframe';



export function SlidesCard  ({parentWidth, setShowOverlay, sharePicInfo, 
  setsharePicInfo, setProfile})  {
  

  const [ curr, setCurr] = useState(0);
  const [showBg, setShowBg] = useState(false)
  const [selectedPic, setSelectedPic] = useState(-1)
  const [picInfo, setPicInfo] = useState(0);
  

  const ToPrev = () => {
    const firstSlide = curr === 0
    const newIndex = firstSlide? (projectPics.length - 1) : (curr - 1)
    setCurr(newIndex) 
}
    
const ToNext = useCallback(() => {
    const lastSlide = curr === projectPics.length - 1
    const newIndex = lastSlide? 0 : curr + 1
    setCurr(newIndex)
}, [curr, projectPics])

const timerRef = useRef(null)
useEffect(() => {
if (timerRef.current) {
    clearTimeout(timerRef.current)
}
timerRef.current = setTimeout(() => {
ToNext()
}, 5000)
return () => clearTimeout(timerRef.current)
},[ToNext]);

const containerStyle = {height:'100%', display:'flex', 
transition:'transform ease-out 1s',
}
const getcontainerStyles = () => ({
  ...containerStyle,
  width:` ${parentWidth * projectPics.length}`,
  transform:`translateX(${-(curr * parentWidth)}px)`
})

const picStyle = { backgroundRepeat:'no-repeat', height:'100%',width:'100%', display:'flex' }
const getPicStyle = (picIndex) => ({
  ...picStyle, backgroundImage:`url(${projectPics[picIndex].image})`,
  minWidth:`${parentWidth}px`, height:'610px', scale:'0.75', position:'relative', 
})
const picDarkOverlayStyles = (picIndex) => ({
  top:'0px', backgroundColor:'rgba(0, 0, 0, 0.85)', alignItems:'center', 
   height:'100%', width: parentWidth, position:'absolute', display:'grid',
   placeItems:'center'})
   const slideBtn = {position:'absolute', top:'50%', color:'#fff', backdropFilter:'blur(8px)',
   padding:'5px 10px', backgroundColor:'rgba(0, 0, 0, 0.6)', fontSize:'25px', cursor:'pointer',
   borderRadius:'8px'}




useEffect(()=>{

},[picInfo])

  return (
    <>
    <div /* PHOTO SLIDE CONTAINER */ style={getcontainerStyles()} className=''>
      {projectPics.map((pic, picIndex) => <div key={picIndex} className=''
      style={getPicStyle(picIndex)} onMouseLeave={() => setSelectedPic(null)}
       onMouseMove={()=> setSelectedPic(picIndex)}  > 
         {selectedPic === picIndex? (
        <div className='' style={picDarkOverlayStyles(picIndex)}>
         <Button text={<strong className='text-info fs-4'>X<span className='text-dark'>perience me</span></strong>} 
         onClick={()=> setShowOverlay(false, setsharePicInfo(picIndex),  setProfile(false),)} /> </div>) 
         : ''};  
      <figure className='d-none'> <Iframe sharePicInfo={sharePicInfo} 
      setsharePicInfo={setsharePicInfo}  />
      </figure>
      </div>)} 
    </div>
    <div className='' onClick={ToNext} style={{...slideBtn, left:'5%'}}> 
          <BsCaretLeftFill/>
        </div>
        <div className='' onClick={ToPrev} style={{...slideBtn, right:'5%'}}> 
          <BsCaretRightFill/> 
        </div>
    </>
  )
}

