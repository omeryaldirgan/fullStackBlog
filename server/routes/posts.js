import express from "express";
import {getPosts,createPost} from '../controllers/posts.js'


const router =express.Router();

//http://localhost:5000/posts
//GET POST DELETE PATCH

router.get("/",getPosts);
router.post("/", createPost);
export default router;
