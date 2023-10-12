import React, { Children, useCallback, useEffect, useRef, useState } from 'react';
import { projectPics } from '../portfolioPic';
import Button from './Button';



export function Iframe (picIndex) {
   return(
    <div style={{width:'100vw', height:'100%', right:'10vw', }}>
      <iframe src={picIndex? projectPics[2].link : 
        projectPics[0].link} title='picture info' className='w-100 h-100' />
    </div>
   )
}


export function SlidesCard  ({parentWidth, setShowOverlay, })  {

  const [ curr, setCurr] = useState(0);
  const [showBg, setShowBg] = useState(false)
  const [selectedPic, setSelectedPic] = useState(-1)
  const [picInfo, setPicInfo] = useState(-1);
  

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

const picStyle = { backgroundRepeat:'no-repeat', height:'100%', }
const getPicStyle = (picIndex) => ({
  ...picStyle, backgroundImage:`url(${projectPics[picIndex].image})`, 
  width:`${parentWidth}px`, height:'100%', scale:'0.8', position:'relative', 
})
const picDarkOverlayStyles = (picIndex) => ({
  top:'0px', display:'flex', backgroundColor:'rgba(0, 0, 0, 0.7)', alignItems:'center', 
  justifyContent:'center', height:'100%', width:'100%', position:'absolute'})




useEffect(()=>{
 console.log(picInfo)
},[picInfo])

  return (
    <>
    <div /* PHOTO SLIDE CONTAINER */ style={getcontainerStyles()} className=''>
      {projectPics.map((pic, picIndex) => <div key={picIndex} className=''
      style={getPicStyle(picIndex)} onMouseLeave={() => setSelectedPic(null)}
       onMouseOver={()=> setSelectedPic(picIndex)} onLoad={()=> Iframe (picIndex)} > 
         {selectedPic === picIndex? (
        <div className='' style={picDarkOverlayStyles(picIndex)}>
         <Button text={'Xperience it'} 
         onClick={()=>  setPicInfo(picIndex, setShowOverlay(false)) } /> </div>) 
         : ''}; 
      <h2 style={{position:'absolute', bottom:'-25px', color:'#bbb'}}>
      {pic.name} 
      </h2> 
      </div>)} 
      <iframe src={picInfo} title='picture info'/>
    </div>
    </>
  )
}

