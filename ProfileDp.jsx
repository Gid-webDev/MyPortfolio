import React, { useEffect, useState } from 'react'
import {ImLocation2} from 'react-icons/im';

const ProfileDp = ({showDp}) => {

  useEffect(()=>{
    console.log();
  },[])

  const DpStyle = {maxWidth:'450px', maxHeight:'400px', position:'absolute', zIndex:'1', padding:' 10px'}
  return (
    <div>

    {showDp&& 
      <div style={DpStyle}>
    <div className="card mb-3" style={{}}>
    <div className="row g-0">
      <div className="col-md-4 col-4">
        <img src={('dp.JPG')} className="img-fluid rounded-start" alt="..." style={{overflow:'hidden'}}/>
      </div>
      <div className="col-md-8 col-8">
        <div className="card-body">
          <h5 className="card-title">Gideon Nwabueze</h5>
          <p>FronEnd Developer</p>
          <p className="card-text"> 
          <span>
          <ImLocation2/> 
          </span> Lagos, NG
          </p>

          <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
    </div>
    }
      
    </div>
  )
}

export default ProfileDp
