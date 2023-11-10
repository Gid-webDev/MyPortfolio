import React, { Children, useCallback, useEffect, useRef, useState } from 'react';
import { projectPics } from '../portfolioPic';
import {BsCaretRightFill, BsCaretLeftFill} from 'react-icons/bs'
import Button from './Button';
import { Iframe } from './Iframe';
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from '../Contexts/ProfileContext';
import { useContext } from 'react';
import { DataContext } from '../Contexts/DataContext';
import { SlidesContext } from '../Contexts/SlidesContext';



export function SlidesCard  ({parentWidth, })  {
  

  const { setPicIndex, setIframe, picInfo, setPicInfo, setNavBarOn, } = useContext(DataContext);
  const {setProfile} = useContext(ProfileContext);

  const Navigation = useNavigate()
  const [ curr, setCurr] = useState(0);
  const [showBg, setShowBg] = useState(false)
  const [selectedPic, setSelectedPic] = useState(-1)

  

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
}, 2000)
return () => clearTimeout(timerRef.current)
},[ToNext]);

const containerStyle = {height:'100%', display:'flex',
transition:'transform ease-out 1s', position:'relative', top:'60px',
}
const getcontainerStyles = () => ({
  ...containerStyle,
  width:` ${parentWidth * projectPics.length}`,
  transform:`translateX(${-(curr * parentWidth)}px)`
})

const picStyle = { backgroundRepeat:'no-repeat', height:'100%',width:'100%', 
display:'flex',}
const getPicStyle = (picIndex) => ({
  ...picStyle, backgroundImage:`url(${projectPics[picIndex].image})`, 
  minWidth:`${parentWidth}px`, height:'605px', scale:'', position:'relative',
})
const picDarkOverlayStyles = (picIndex) => ({
  top:'0px', backgroundColor:'rgba(0, 0, 0, 0.96)', alignItems:'center', 
   height:'100%', width: parentWidth, position:'absolute', display:'grid',
   placeItems:'center', borderRadius:'20px'})
   const slideBtn = {position:'absolute', top:'50%', color:'#fff', backdropFilter:'blur(8px)',
   padding:'5px 10px', backgroundColor:'rgba(0, 0, 0, 0.6)', fontSize:'25px', cursor:'pointer',
   borderRadius:'8px'}

useEffect(()=> {
  console.log()
})

  return (
    <>
    <SlidesContext.Provider value={{}}>

      <div /* PHOTO SLIDE CONTAINER */ style={getcontainerStyles()}>
        {projectPics.map((pic, picIndex) => <div key={picIndex} className=''
        style={getPicStyle(picIndex)} onMouseLeave={() => setSelectedPic(null)}
         onMouseMove={()=> setSelectedPic(picIndex)}  > 
           {selectedPic === picIndex? (
          <div className='' style={picDarkOverlayStyles(picIndex)}>
          
           <Button text={<strong className='text-warning fs-3'> Ex<span className='text-dark'>plore</span></strong>} 
            onClick={()=> setPicIndex(picIndex, setProfile(true, setNavBarOn(false)), setPicInfo(pic.link), 
              setIframe(true)) } /> 
          
           </div>) 
           : ''};  
        </div>)} 
      </div>
         <div className='fs:-1 d-none' onClick={ToNext} style={{...slideBtn, left:'5%',}}> 
            <BsCaretLeftFill/>
          </div>
          <div className='d-none' onClick={ToPrev} style={{...slideBtn, right:'5%',}}> 
            <BsCaretRightFill/> 
          </div>
     </SlidesContext.Provider>    
    </>
  )
}

