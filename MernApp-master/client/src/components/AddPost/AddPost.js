import React, { useState } from 'react'
import { addPost } from '../../redux/actions/postActions'
import './addPost.css'
import {useDispatch, useSelector} from 'react-redux'


const AddPost = () => {
  const dispatch = useDispatch()
  const [selectedImg , setSelectedImg] = useState ("")
  
  const [newPost , setNewPost] = useState({
    title : "" , 
    description : ""
  })

  const handleChange = (e) => {
    e.preventDefault()
    setNewPost({...newPost, [e.target.name]:e.target.value})
  }

  const handleImgChange = (e) => {
    e.preventDefault()
    if (e.target.files.length){
      const myImg = e.target.files[0]
      //create reader to convert img to file
      const reader = new FileReader()
      reader.readAsDataURL(myImg)
      reader.onload = () => {
        setSelectedImg(reader.result)
        setNewPost({...newPost , image : reader.result })
      }
    }
    
  }

  const handleAddPost = (e) => {
    e.preventDefault()
    dispatch(addPost(newPost))
  }

  return (
    <div className='AddPost'>
        <img name = "newImage" width="250px" src={selectedImg} alt='myImg' />
        <input type="file" name='image' onChange={handleImgChange}  />
        <input name='title' type="text" onChange={handleChange} />
        <textarea name='description' type="text" onChange={handleChange} />

        <button onClick={handleAddPost}> add new Post </button>
    </div>
  )
}

export default AddPost