import React, { useEffect, useState } from 'react'
import ProjectCard from '../ProjectCard'

const Projects = () => {

    const ProjectsArray = [
        {"title": " React Movie app",
        "link": "https://moviesblocks.netlify.app/",
        "id": "1",
        "sourceCode": "#"
      },
      {"title": "React Weather app",
        "link": "https://kingweather.netlify.app/",
        "id": "2",
        "sourceCode": "#"
      },
      {"title": "Bootstrap CSS Web Templates",
        "link": "https://webdev-pro.netlify.app/",
        "id": "3",
        "sourceCode": "#"
      },
      {"title": "Figma Ui/Ux AirBnB",
        "link": "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FiRmUh6jtMfzxvCRYGMfMa8%2FUntitled%3Fnode-id%3D212-1206%26starting-point-node-id%3D212%253A1206%26scaling%3Dscale-down%26mode%3Ddesign%26t%3Db0RFVTgoK3TBNJY3-1",
        "id": "4",
        "sourceCode": "#"
      },

      {"title": "Figma Ui/Ux cars Project",
        "link": "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FeLkPmY6eTRtKeQyqcRmvJD%2FSchool-Project--UI%252FUX%3Fnode-id%3D9-2%26starting-point-node-id%3D9%253A2%26scaling%3Dscale-down%26mode%3Ddesign%26t%3DYXxSCkewoRFEZgUr-1",
        "id": "5",
        "sourceCode": "#"
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
