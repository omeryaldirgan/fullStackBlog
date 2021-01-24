import axios  from 'axios'
const apindPoint='http://localhost:5000/posts';

export const fetchPosts=async ()=>await axios.get(apindPoint);
export const createPost=async (post)=>await axios.post(apindPoint,post);
