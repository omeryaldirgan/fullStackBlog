import React,{useEffect} from 'react';
import moment from 'moment';
import {useSelector,useDispatch} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {Paper,Typography,Divider,Button,Chip} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import noImage from "../images/noimage.svg";
import {fetchSinglePost} from "../redux/actions/posts"; //1
const useStyles = makeStyles((theme) => ({
   paper: {
      padding: theme.spacing(3),
      marginBottom: theme.spacing(8),
   },
   header: {
      display: "flex",
      justifyContent: "space-between",
   },
   content: {
      marginTop: theme.spacing(3),
   },
   image: {
      width: "100%",
      borderRadius: 5,
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(4),
   },
   chip: {
      marginTop: theme.spacing(1),
   },
}));

const PostDetails=({history,match,location })=>{
   const classes=useStyles();
   const dispatch=useDispatch();
   const {id}=match.params;

   useEffect(()=>{
    dispatch(fetchSinglePost(id))
   },[dispatch]);

   const post=useSelector(state=>state.posts.currentPost);
   console.log(post);
   return(
      <div>
         <h1>Hello</h1>
      </div>
   )
}
export default  PostDetails;
