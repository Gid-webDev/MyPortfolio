import React, { useState } from 'react'
import {BiChevronsRight} from 'react-icons/bi'

const Welcome = () => {
    const [showWelcome, setWelcome] = useState(true);


    const WelcomeOverlay = {width:'100%', height:'108%', position:'absolute',
     backgroundColor:'rgba(21, 21, 46, 0.5)', top:'0', zIndex:'10', transition:'0.9s',
     WebkitBackdropFilter:'blur(8px)', backdropFilter:' blur(8px)', 
    }
    const WelcomeContainer = {height:'100vh', display:'grid', placeItems:'center', 
    textAlign:'center',
    }
    const ProfilePix = {
      borderRadius:'50% ', width:'100%', height:'86%', boxShadow:'7px 8px rgb(255, 255, 255, 0.25)',
      position:'relative',
  }
  const ProfileOverlay = {
    backgroundColor:' rgba(21, 21, 46, 0.5)', position:'absolute', height:'100%', 
    width:'100%', zIndex:'1', top:'0', left:'0', display:'none'
}
  const NameContainer = {
    color:'#ddd', textAlign:'start', padding:'20px 20px', position:'relative',
    zIndex:'10', top:'-35px'
  }
  const Names = {
    fontSize:'35px', fontWeight:'700', textShadow:'3px 3px rgba(255, 255 255, 1)',
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
  width:'', padding:'10px 14px', fontSize:'20px', color:'#111', position:'relative',
  backgroundColor:'#ddd', border:'none', borderRadius:'5px', 
  display:'flex', alignItems:'center', justifyContent:'space-between', zIndex:'10'
}



  return (
    <>
      {showWelcome&& <div style={WelcomeOverlay}>
       <div className='' style={WelcomeContainer}>
       <figure style={ProfileOverlay}></figure>
        <section className='cardContainer row g-0 m-3' style={{maxWidth:'800px', maxHeight:'70vh', borderRadius:'20px', scale:'0.8', top:'-40px', position:'relative'}}>
        <div className='col-sm-4' style={{scale:'', }}>
         <img style={ProfilePix}
         src={('gid.jpg')} alt=''/>
        </div>
        <div className='col-sm-8' style={NameContainer}>
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
           <BiChevronsRight style={{fontSize:'20px'}}/>
        </button>
        </div>
        
         
        
        
        </section>
       </div>
      
      </div>}
    </>
  )
}

export default Welcome
