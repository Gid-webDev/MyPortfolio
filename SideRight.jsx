import React from 'react'
import {ImLocation2} from 'react-icons/im';
import NavContainer from './components/NavContainer';
import {BsFillTelephoneInboundFill, BsWhatsapp} from 'react-icons/bs';
import {FaReact, FaFigma, FaBootstrap, FaHtml5, FaCss3} from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di';
import {SiMui, SiRedux, SiTailwindcss} from 'react-icons/si';

const SideRight = () => {
  return (
    <div>
    <div className='ContactContainer px-3 py-2'>
         
    <section className='skills'>
    <p className='btn btn-outline-warning px-4 rounded-0 text-light'>PRO SKILLS</p>

    <div className='d-flex contacts'> 
    <span className='text-warning'>
    <FaReact/> 
    </span> 
    <p> React Js</p>
    </div>

    <div className='d-flex contacts'> 
    <span className='text-warning'>
    <SiRedux/> 
    </span> 
    <p> Redux & Restful Api</p>
    </div>

    <div className='d-flex contacts'> 
    <span className='text-warning'>
    <SiMui/> 
    </span> 
    <p> Material Ui</p>
    </div>

    <div className='d-flex contacts'> 
    <span className='text-warning'>
    <FaFigma/> 
    </span> 
    <p> Figma</p>
    </div>

    <div className='d-flex contacts'> 
    <span className='text-warning'>
    <SiTailwindcss/>
    </span> 
    <p> Tailwind css</p>
    </div>

    <div className='d-flex contacts'> 
    <span className='text-warning'>
    <FaBootstrap/> 
    </span> 
    <p> Bootstrap</p>
    </div>

    <div className='d-flex contacts'> 
    <span className='text-warning'>
    <DiJavascript1/> 
    </span> 
    <p> JavaScript</p>
    </div>

    <div className='d-flex contacts'> 
    <span className='text-warning'>
    <FaHtml5/> 
    </span> 
    <p> HTML</p>
    </div>

    <div className='d-flex contacts'> 
    <span className='text-warning'>
    <FaCss3/> 
    </span> 
    <p> CSS</p>
    </div>
    </section>

     <section className='contactDetails pt-3'>
     <p className='btn btn-outline-warning px-4 rounded-0 text-light'>CONTACT ME</p>
     
     <div className='d-flex contacts'> 
     <span className='text-warning'>
     <ImLocation2/> 
     </span > 
     <p>27 Francis Opute Crescent, Greenfeild estate, Lagos NG.</p>
     </div>

     <div className='d-flex contacts'> 
     <span className='text-warning'>
     <BsWhatsapp/> 
     </span> 
     <p> +2347031523139</p>
     </div>
     </section>
    </div>
    </div>
  )
}

export default SideRight
