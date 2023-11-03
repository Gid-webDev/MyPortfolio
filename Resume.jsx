import React from 'react'
import { ResumeContainer } from '../STYLED.CONTAINER/Resume.styled'
import { Education, workXperience} from '../Resume.Data'
import { ResumeNavBar } from '../STYLED.CONTAINER/Resume.styled'
import {useNavigate} from 'react-router-dom'


const Resume = () => {
  const Navigation = useNavigate();
  const handleClick = () => Navigation('/')
  
  return (
    <>
    <ResumeNavBar>
       <button onClick={handleClick}> Home</button> 
       <button onClick={() => alert('Download is disable')}> Download Resume </button>
    </ResumeNavBar>
      <ResumeContainer>
      
       <section> 
         <img src='gid.jpg' alt="Gideon's picture"/>
         <h3>Contact</h3> 
         <hr/>
         <h6> +234-07031523129 <br/>
         <span> <h6>ngogideon@gmail.com </h6> </span>
         <span>  gid-webdev </span> 
         </h6> <br/>
         <h3>Skills</h3>
         <hr/>
         <ul>
          <li>  Figma </li>
          <li> React js </li>
          <li>Bootstrap </li>
          <li>Vanila Js </li>
          <li>HTML </li>
          <li>CSS</li>
         </ul> <br/>
         <h3>Languages</h3> 
         <hr/>
         <h6>English</h6>

       </section>
       
       <div>
          <figure> 
            <h1> Gideon Nwabueze</h1>
            <h4> FrontEnd Developer</h4>
           <p>
             My objective is to become a full stack software developer with the ability to collaborate
             effectively with senior developers while spending extra time to be mentored and working closely with team members to ensure workloads are effectively
             redirected to bottlenecks and personally picking up the slack when necessary. With my passion for personal growth and software development, I’m ready to
             apply my skills for coding to developing quality solutions.
           </p>
          </figure>
          <hr/>
            {workXperience.map((xperience, id)=> <figure key={id}> 
            <strong>{xperience.name} 
             <span>
             <h5>{xperience.title} <br/> 
               <span> {xperience.date} 
               </span>
            </h5>
             </span>
            </strong>
            
            <p>{xperience.description}</p>
            <hr/>
          </figure> )} 
          
          <figure> <h3> Educational History</h3> </figure>
          {Education.map((education, id)=> <figure key={id}> 
            <strong>{education.name} 
             <span>
             <h5>{education.school} <br/> 
               <span> {education.date} 
               </span>
            </h5>
             </span>
            </strong>
            <hr/>
          </figure> )}
         
        </div>
      </ResumeContainer>
    </>
  )
}

export default Resume
