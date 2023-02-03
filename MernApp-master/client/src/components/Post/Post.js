import React from "react";
import {useDispatch} from 'react-redux'
import { deletePost } from "../../redux/actions/postActions";

const Post = ({elm}) => {

  const dispatch = useDispatch()
  
  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(deletePost(elm._id))
  }




  return (
    <div className="card" style={{width : "350px"}}>
     
      <h6> {elm.owner.name} </h6>          
      {elm.image&& <img
        src= {elm.image.url}
        className="card-img-top"
        alt="Fissure in Sandstone"
      /> } 
      <div className="card-body">
        <h5 className="card-title">{elm.title}</h5>
        <p className="card-text">
          {elm.description}
        </p>
        <button  className="btn btn-primary" onClick={handleDelete}>
          delete
        </button>
      </div>
    </div>
  );
};

export default Post;
