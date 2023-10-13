import React, { Children, useCallback, useEffect, useRef, useState } from 'react';
import { projectPics } from '../portfolioPic';
import Button from './Button';




export function Iframe ({sharePicInfo, setsharePicInfo}) {
  const [projectLink, setProjectLink] = useState()
  setsharePicInfo = ('')

  useEffect(()=>{
    console.log(sharePicInfo)
  },[sharePicInfo])

   return(
    <div style={{width:'100vw', height:'100%', right:'10vw', }}>
      <iframe src={sharePicInfo? projectPics[sharePicInfo].link : ''}  
      title='picture info' className='w-100 h-100' />
    </div>
   )
}



export function SlidesCard  ({parentWidth, setShowOverlay, sharePicInfo, setsharePicInfo})  {
  

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

const picStyle = { backgroundRepeat:'no-repeat', height:'100%', }
const getPicStyle = (picIndex) => ({
  ...picStyle, backgroundImage:`url(${projectPics[picIndex].image})`, 
  width:`${parentWidth}px`, height:'100%', scale:'0.8', position:'relative', 
})
const picDarkOverlayStyles = (picIndex) => ({
  top:'0px', display:'flex', backgroundColor:'rgba(0, 0, 0, 0.7)', alignItems:'center', 
  justifyContent:'center', height:'100%', width:'100%', position:'absolute'})




useEffect(()=>{

},[picInfo])

  return (
    <>
    <div /* PHOTO SLIDE CONTAINER */ style={getcontainerStyles()} className=''>
      {projectPics.map((pic, picIndex) => <div key={picIndex} className=''
      style={getPicStyle(picIndex)} onMouseLeave={() => setSelectedPic(null)}
       onMouseOver={()=> setSelectedPic(picIndex)}  > 
         {selectedPic === picIndex? (
        <div className='' style={picDarkOverlayStyles(picIndex)}>
         <Button text={'Xperience it'} 
         onClick={()=> setShowOverlay(false, setsharePicInfo(picIndex))} /> </div>) 
         : ''}; 
      <h2 style={{position:'absolute', bottom:'-25px', color:'#bbb'}}>
      {pic.name} 
      </h2> 
      <figure className='d-none'> <Iframe sharePicInfo={sharePicInfo} 
      setsharePicInfo={setsharePicInfo}  />
      </figure>
      </div>)} 
      
    </div>
    </>
  )
}

