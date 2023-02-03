import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddPost from '../../components/AddPost/AddPost'
import {getProfile} from '../../redux/actions/authActions'
import {getPost} from '../../redux/actions/postActions'





const Profile = () => {
  
  const dispatch = useDispatch()
  const profUser = useSelector(state=>state.authReducer.user)
  const loader = useSelector(state=>state.authReducer.isLoading)

  useEffect(()=>{
    dispatch(getProfile())
  },[])

  
  console.log("hedi loader fil profile" , loader)
  
  
  console.log("filprofile" , profUser)
 

  return (
    <>
      <div>
        <h1> user Profile </h1>
        {
          !loader ? <>   <h2> {profUser && profUser.name} </h2> <h2> {profUser && profUser.email} </h2>   <h1> hay mchet </h1>  </>
          :  <h1> LOADING </h1> 
        } 
        
        <AddPost></AddPost>



      </div>
   
       
  
    </>

)
   
}

export default Profile