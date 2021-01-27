import * as api from '../../api/index'
import * as types from './types'
//Action: Bir javascript objesidir. Store’da hangi state’in değişeceği bilgisini(type) ve state verisini taşır(payload)

export const fetchPosts=()=>async (dispatch)=>{
   try
   {
      const {data}=await api.fetchPosts();
      dispatch({
         type:types.FETCH_POSTS,
         payload: data
      })
   }catch (e)
   {
      console.log(e)
   }
}



 export const createPost=(post)=>async(dispatch)=>{
    try
    {
       const {data}=await api.createPost(post);
       dispatch({
          type:types.CREATE_POST,
          payload: data
       })
    }catch (e)
    {
       console.log(e)
    }
 }

export const fetchSinglePost=(id)=>async(dispatch)=>{
   try
   {
      const {data}=await api.fetchSinglePost(id);
      dispatch({
         type:types.FETCH_SINGLE_POST ,
         payload: data
      })
   }catch (e)
   {
      console.log(e)
   }
}


export const deletePost=(id)=>async(dispatch)=>{
   try
   {
      const {data}=await api.deletePost(id);
      dispatch({
         type:types.DELETE_POST ,
         payload: data._id
      })
   }catch (e)
   {
      console.log(e)
   }
}

export const updatePost=(id,post)=>async(dispatch)=>{
   try
   {
      const {data}=await api.updatePost(id,post);
      dispatch({
         type:types.UPDATE_POST ,
         payload: data//update edilmiş yeni datayı payloada gönderdik
      })
   }catch (e)
   {
      console.log(e)
   }
}
