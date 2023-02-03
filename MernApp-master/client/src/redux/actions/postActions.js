import axios from 'axios'
import { ADD_POST_FAILED, ADD_POST_SUCCESS , GET_POST_REQUEST , GET_POST_SUCCESS , GET_POST_FAILED, DELETE_POST_REQUEST, DELETE_POST_FAILED, DELETE_POST_SUCCESS  } from './PostTypes'
import {setToken} from '../../helpers/token'
import { prefixe } from '../../helpers/const'


export const addPost = (newPost) => async (dispatch) => {
    dispatch({
        type : ADD_POST_FAILED
    })
    
    try {
        setToken()
        const {data} = await axios.post(`${prefixe}/api/Post/addNewPost`,newPost)
        dispatch({
            type : ADD_POST_SUCCESS,
            payload : data
        })


    
    } catch (err) {
        dispatch ({
            type : ADD_POST_FAILED,
            payload : err.response.data.msg
        })
    }

}

export const getPost = () => async (dispatch) => {
    dispatch({
        type: GET_POST_REQUEST
    })
    try {
        setToken()
        const { data } = await axios.get(`${prefixe}/api/Post/AllPost`)
        dispatch({
            type: GET_POST_SUCCESS,
            payload: data
        })
    }

    catch (err) {
        dispatch({
            type: GET_POST_FAILED,
            payload: err.response.data.msg
        })

    }
}

export const deletePost = (id) => async (dispatch) => {
    dispatch({
        type : DELETE_POST_REQUEST
    })

    try {
        setToken()
        await axios.delete(`${prefixe}/api/Post/deletePost/${id}`)
        dispatch({
            type : DELETE_POST_SUCCESS
        })
        

        
    } catch (err) {
        dispatch({
            type: DELETE_POST_FAILED,
            payload: err.response.data.msg
        })

    }
}