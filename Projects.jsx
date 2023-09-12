import React, { useEffect, useState } from 'react'
import ProjectCard from '../ProjectCard'

const Projects = () => {

    const ProjectsArray = [
        {"title": "movie app",
        "link": "https://moviesblocks.netlify.app/",
        "id": "1"
      },
      {"title": "weather app",
        "link": "https://kingweather.netlify.app/",
        "id": "2"
      },
      {"title": "Business",
        "link": "https://webdev-pro.netlify.app/",
        "id": "3"
      }
      ]

      const [project, setProject] = useState(ProjectsArray)
      
      useEffect(()=>{
        console.log(project)
      },[])

      const Heading3 = {
        backgroundColor:'', position:'relative', padding:'5px 25px',
        color:'#bbb', textAlign:'center'
    }
  return (
    <>
      <section className='g-0 row position-relative'> 
      
      {ProjectsArray.map((project)=> (<div key={project.id} className='col-lg-6'> 
          <ProjectCard project={project}/>
        </div>))}
      </section>
    </>
  )
}

export default Projects
