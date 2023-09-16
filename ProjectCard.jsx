import React from 'react'

const ProjectCard = ({project}) => {

  const CardContainer = 
  {scale:'0.9', borderRadius:'25px', padding:'0 0 10px 0', boxShadow:' 0 1.8px 0.85px',
  backgroundColor:'#fff', color:' rgba(21, 21, 46, 1)', scale:'0.8'
}
  const cardsStyle = {
    width:'100%', height:'95vh', borderRadius:'25px', 
}
const CardInfo = {
  fontWeight:'500', fontSize:'20px', padding:'0px', textTransform:'capitalize'
}

  return (
    <>
      <div className='cardContainer p-2' style={CardContainer}>
        <iframe src={project.link} style={cardsStyle} allowfullscreen></iframe>
        <div className='d-flex row justify-content-between px-2'>
          <div className='col'>
            <span style={CardInfo}>{project.title} &nbsp; </span>
          </div>
          <div className='col text-end'>
            <a href={project.link} target='_blank' className='btn btn-dark'> 
              View App
            </a>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default ProjectCard
