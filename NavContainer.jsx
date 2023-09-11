import React from 'react';
import {BsTwitter, BsGithub, BsSkype} from 'react-icons/bs';
import {FaLinkedinIn, FaFacebookF} from 'react-icons/fa';
import {ImLocation2} from 'react-icons/im';



const NavContainer = ({setShowDp}) => {
    
  const socialStyle = {
    display: 'flex', justifyContent:'flex-end'
  }
  const Social_a = {
    color:'rgb(23, 23, 73)', scale:'1.2', marginLeft:'25px',
  }
  return (
    <div>

    <nav className="container" 
    style={{display:'flex', justifyContent:'space-between', alignItems:'center',}}>
      {/*Brand image*/}
    <div className='bg-dark'style={{width:'42px', height:'42px', borderRadius:'50%', cursor:'pointer'}}>
      <img src={('dp.JPG')} alt='displayPic' className='img-fluid w-100 h-100 rounded-circle'
      onClick={()=> setShowDp(true)}/>
      
    </div>
    <div className='Location  text-center fs-6 d-none'> 
    <ImLocation2/> <p>Lagos</p>
    </div>

     <div className="socials" style={socialStyle}>
      <a className="navbar" style={Social_a} target='about_blank' href="https://www.github.com/Gid-webDev">
        <BsGithub/>
      </a>
      <a className="navbar" style={Social_a} target='about_blank' href="https://www.linkedin.com/in/gideon-nwabueze-83840b281/">
        <FaLinkedinIn/>
      </a>  
      <a className="navbar" style={Social_a} target='about_blank' href="https://twitter.com/gid2gid?s=11&t=GbRBhIv6Ws3cplWUbCrU4Q">
        <BsTwitter/>
      </a>
      <a className="navbar" style={Social_a} target='about_blank' href="https://web.facebook.com/Gidddy">
        <FaFacebookF/>
      </a>
      <a className="navbar" style={Social_a} target='about_blank' href="https://secure.skype.com/portal/overview">
        <BsSkype/>
      </a>
    </div>
  </nav>
    </div>
  )
}

export default NavContainer
