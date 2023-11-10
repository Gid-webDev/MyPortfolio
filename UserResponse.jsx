import React, { useContext, useEffect, useState } from 'react'
import {AiFillDislike, AiFillLike} from 'react-icons/ai'
import  { FaCommentAlt } from 'react-icons/fa'
import { UserRes_Container } from './STYLED.CONTAINER/UserRes.styled'
import { DataContext } from './Contexts/DataContext'
import { projectPics } from './portfolioPic'




export const Comments = () => {
  const {usersComment, setComment, projectId, project} = useContext(DataContext)
  

  return(
    <div>
    {usersComment&& <section>
     <div className="mb-0">
        <label for="exampleFormControlInput1" className="form-label"></label>
        <input type="email" className="form-control py-2" id="exampleFormControlInput1" placeholder="name@example.com"/>
     </div>
     <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label"> </label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="12"
         placeholder={`Drop comments related to ${projectId.name} project`}>
        </textarea>
     </div>
     <div class="">
       <button type="submit" class="btn btn-primary  py-1"> Post comments</button>
     </div>
    </section>}
    </div>
  )

}


const UserResponse = () => {
  const {usersComment, setComment, BGcolor, textMode,} = useContext(DataContext);

  useEffect(()=>{
    console.log()
  }, [])
  return (
   <>
      <UserRes_Container color={BGcolor} >
       <button> <AiFillLike/> </button>
       <button> <AiFillDislike/> </button>
       <button> <FaCommentAlt onClick={()=> usersComment? setComment(false,) : setComment(true)} /> </button>
    </UserRes_Container>
   </>
  )
}

export default UserResponse
