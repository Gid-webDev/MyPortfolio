import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button 
    style={{padding:'10px 26px', backgroundColor:'#ddd', borderRadius:'100px', 
    border:'0', outline:'none',boxShadow:'1px 1px 20px 1px #ddd' ,
      color:'#303030', fontSize:'20px', fontWeight:'700'}} onClick={onClick}>
       {text}
    </button>
  )
}

export default Button
