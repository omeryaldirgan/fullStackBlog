import axios  from 'axios'
const apindPoint='http://localhost:5000/posts/';

export const fetchPosts=async ()=>await axios.get(apindPoint);
export const createPost=async (post)=>await axios.post(apindPoint,post);
export const fetchSinglePost=async (id)=>await axios.get(`${apindPoint}${id}`);
export const deletePost=async (id)=>await axios.delete(`${apindPoint}${id}`);
export const updatePost=async (id,updatedPost)=>await axios.patch(`${apindPoint}${id}`,updatedPost);
