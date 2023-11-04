import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutMe = () => {
  const Navigation = useNavigate()
  return (
    <>
          <p className='text-start fs-5'>
             Gideon Nwabueze is a Nigerian born FrontEnd developer aspiring to be a senior software developer and an outstanding tech enterprenuer.
             He started his journey as a software engineer around mid-2022 with iLovecoding school and ever since has been commited to the journey
             even in the face of distractions & faustrations. 
             He's other skills/work experience include: &nbsp;
             <span className='fw-bold fs-6'>
               Audio engineering - [4Square church, RCCG, Shekinah Nite...], Event management - [Shekinah Nite, RCCG, 4Square], 
               Marketing - [AIICO, Pro-merchants, Freelance], Music(Bass Guitarist) - [GMI, RCCG, Banner of Victory, Realm of Glory, 4Square, Christ Embassy]. 
             </span>
             <br/>
             <button className='btn btn-dark' onClick={()=> Navigation("/Resume")}> View my Resume </button>
          </p>
    </>
  )
}

export default AboutMe
