import React, { useContext, useEffect, useState } from 'react'
import {AiFillDislike, AiFillLike} from 'react-icons/ai'
import  { FaCommentAlt } from 'react-icons/fa'
import { UserRes_Container } from './STYLED.CONTAINER/UserRes.styled'
import { DataContext } from './Contexts/DataContext'





export const Comments = () => {
  const {usersComment, setComment, projectId, project} = useContext(DataContext)

  const [user, setUser] = useState({
    userID:'', 
    userComment:''
  })

  function handleClick (event) {
    event.preventDefault();
    console.log(user)
  };
  function handleChange (event) {
    const {name, value} = event.target;
    setUser((prevUser) => {
      return{
        ...prevUser,
        [name]: value
      }
    })
     }


  return(
    <div>
    {usersComment&& <section>
     <div className="mb-0">
        <label for="exampleFormControlInput1" className="form-label"></label>
        <input name='userID' type="email" value={user.userID} onChange={handleChange}
        className="form-control py-2" id="exampleFormControlInput1" placeholder="name@example.com"/>
     </div>
     <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
        </label>
        <textarea name='userComment' className="form-control" id="exampleFormControlTextarea1" rows="8" value={user.userComment}
          placeholder={`Drop comments related to ${projectId.name} project`} onChange={handleChange}>
        </textarea>
     </div>
     <div class="">
       <button type="submit" class="btn btn-primary  py-1" onClick={handleClick}>
         Post comments
       </button>

       <div /* COMMENTS IS RENDERED HERE */ 
       className='text-light p-4 my-2 rounded text-start' style={{maxHeight:'55vh', overflowY:'auto'}}>
         <strong className='fs-4 text-info'> {user.userID} </strong> <br/>
         <small className='fs-5'> {user.userComment} </small>
       </div>
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
