import React, { useState } from 'react'
import {BiChevronsRight} from 'react-icons/bi'

const Welcome = () => {
    const [showWelcome, setWelcome] = useState(true);


    const WelcomeOverlay = {left:'0',width:'100%', height:'100%', position:'absolute',
     backgroundColor:'rgba(0, 0, 0, 0.3)', top:'0', zIndex:'10', 
     WebkitBackdropFilter:'blur(8px)', backdropFilter:' blur(8px)',
     justifyContent:'center', display:'flex', 
    }
    const WelcomeContainer = {height:'100vh', textAlign:'center', 
    maxWidth:'700px', scale:'0.8', top:'5%', position:'relative'
  
    }
    const ProfilePix = {
      borderRadius:'50% ', width:'100%', height:'100%', boxShadow:'7px 8px rgb(255, 255, 255, 0.25)',
      position:'relative',
  }
  const ProfileOverlay = {
    backgroundColor:' rgba(21, 21, 46, 0.5)', position:'absolute', height:'100%', 
    width:'100%', zIndex:'1', top:'0', left:'0', display:'none'
}
  const CardContainer = {
    width:'100%', height:'', borderRadius:'20px', scale:'',
     position:'relative',backgroundColor:'rgba(21, 21, 46, 0.8)',
     boxShadow:'2px 2px 8px 1px rgba(255, 255, 255, 0.5'
   }
   const ImgStyle = { 
    maxHeight:'260px', maxWidth:'260px',
  }
  const NameContainer = {
    color:'#ddd', textAlign:'start', padding:'20px 20px',
    zIndex:'10', top:'0', maxHidth:'400px', maxHeight:'400px'
  }
  const Names = {
    fontSize:'38px', fontWeight:'700', textShadow:'3px 3px rgba(255, 255 255, 1)',
  }
  const Title = {
    fontSize:'28px', fontWeight:'100'
  }
  const NaijaFlag = {
    width:'30px', height:'30px', borderRadius:'50%'
  }
  const Nigerian = {
    fontSize:'18px', color:'#ddd'
}
const Btn = {
  width:'', padding:'10px 14px', fontSize:'20px', color:'rgb(21, 21, 46)',
  backgroundColor:'#fff', border:'none', borderRadius:'5px', position:'relative',
  display:'flex', alignItems:'center', justifyContent:'space-between', zIndex:'10'
}



  return (
    <>
      {showWelcome&& <div style={WelcomeOverlay}  className='position-fixed'>
       <div style={WelcomeContainer} >
       <figure style={ProfileOverlay}></figure>

        <section className='cardContainer p-4 row g-0' style={CardContainer}>
        <div className='col-sm ' style={ImgStyle}>
         <img style={ProfilePix}
         src={('gid.jpg')} alt=''/>
        </div>

        <div className='col-sm ' style={NameContainer}>
          <div style={Names}>
           Gideon Nwabueze
           <span>
            <div style={Title}>
             FrontEnd Developer 
             <span style={{display:'flex'}}>
              <img src={('9ja.png')} alt='Nigerian flag'
               style={NaijaFlag}/>
              <p className='px-2' style={Nigerian}> 
               Proudly Nigerian
              </p>
             </span>
            </div>
           </span>
          </div>
          
          <button style={Btn} 
           onClick={() => setWelcome(false)}>
           Continue to Page 
           <BiChevronsRight style={{fontSize:'20px',}}/>
        </button>
        </div>
        
         
        
        
        </section>
       </div>
      
      </div>}
    </>
  )
}

export default Welcome
