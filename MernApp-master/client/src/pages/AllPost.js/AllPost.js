import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Post from '../../components/Post/Post'
import {getPost} from '../../redux/actions/postActions'
import './allPost.css'

const AllPost = () => {
    const dispatch = useDispatch()
    const Allposts = useSelector(state=>state.postReducers)
    console.log(Allposts.postList)

    const auth = useSelector(state => state.authReducer)
    console.log(auth.isAuth)

    useEffect(()=>{
        auth.isAuth && dispatch(getPost())
        
      },[])

  return (
    <div className='lista'>
       {
        Allposts&&Allposts.postList.map((elm , i ) => <Post key={i} elm={elm}/>).reverse()
       }


    </div>
  )
}

export default AllPost