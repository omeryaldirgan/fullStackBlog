import Post from "../models/posts.js"

export const getPosts=async (req,res)=>{
   try{
     const posts=await Post.find();//postları bul getir
     res.status(200).json(posts);

   }catch (error ){
       res.status(404).json({
          message:error.message
       })
   }
}
export const createPost=async (req,res)=>{
   const newPost=new Post(req.body);
   try{
     await newPost.save();
      res.status(201).json(newPost);
   }catch (error ){
      res.status(409).json({
         message:error.message
      })
   }
}


export const getSinglePost=async (req,res)=>{
   try{
      const {id:_id}=await req.params //routes da tanımlanan id

      const post=await Post.findById(_id);
      res.status(200).json(post);
   }catch (error ){
      res.status(404).json({
         message:error.message
      })
   }
}

export const deletePost=async (req,res)=>{
   const {id:_id}=await req.params //routes da tanımlanan id
   try{
      const deletePost=await Post.findByIdAndRemove(_id);
      res.json(deletePost);
   }catch (error ){
      res.status(404).json({
         message:error.message
      })
   }
}


export const updatePost=async (req,res)=>{
   const {id:_id}=await req.params //routes da tanımlanan id
   const post=req.body;
   try{
      const updatedPost=await Post.findByIdAndUpdate(_id,post,{new:true});//{new:true} update edilen postu bana dönder
      res.json(updatedPost);
   }catch (error ){
      res.status(404).json({
         message:error.message
      })
   }
}


