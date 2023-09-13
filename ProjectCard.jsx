import React from 'react'

const ProjectCard = ({project}) => {

  const CardContainer = 
  {scale:'0.9', borderRadius:'25px', padding:'0 0 10px 0', boxShadow:'2px 2px 3px 2px rgba(0, 0, 0, 0.3)',
  backgroundColor:'#fff', color:' rgba(21, 21, 46, 1)'
}
  const cardsStyle = {
    width:'100%', height:'95vh', borderRadius:'25px', 
   
}
const CardInfo = {
  fontWeight:'500', fontSize:'22px', padding:'0 20px', textTransform:'capitalize'
}

  return (
    <>
      <div className='cardContainer p-2' style={CardContainer}>
        <iframe src={project.link} style={cardsStyle}></iframe>
        <span style={CardInfo}>{project.title}</span>
      </div>
      
    </>
  )
}

export default ProjectCard
