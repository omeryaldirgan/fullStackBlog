import React, {useState} from "react";
import {makeStyles} from "@material-ui/core";
import {
   Button,
   TextField,
   Select,
   MenuItem,
   Dialog,
   DialogActions,
   Input,
   DialogContent,
   DialogContentText,
   DialogTitle
}
from
   '@material-ui/core';
import {useForm,Controller} from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import FileBase64 from "react-file-base64";
import {useDispatch} from "react-redux";
import {createPost} from "../redux/actions/posts";

const useStyles=makeStyles((theme)=>({
   paper:{
      padding:theme.spacing(2)
   },
   textField:{
      marginBottom:theme.spacing(2)
   }
}))

const tags=["fan","programming","science"];

const postSchema=yup.object().shape({
   title:yup.string().required(),
   subTitle:yup.string().required(),
   content:yup.string().min(20).required(),
   tag:yup.mixed().oneOf(tags)
})



const AddFormPost=({open,handleClose})=>{
   const dispatch=useDispatch();
   const {register,handleSubmit,control,errors,reset}=useForm({
      resolver:yupResolver(postSchema)
   })

   const [file,SetFile]=useState(null);

   const clearForm=()=>{
      reset();
      SetFile(null);
      handleClose();
   }

   const onSubmit=(data)=>{
     //dispatch create post action
      dispatch(createPost({...data,image:file}))
      clearForm();
   }

   const classes=useStyles();
   return(
      <Dialog open={open} onClose={handleClose}>
         <DialogTitle>Yeni Yazı Oluştur</DialogTitle>
         <DialogContent>
            <DialogContentText>Formu Doldurun.</DialogContentText>

            <div className={classes.root}>
               <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                        id='title'
                        label='Başlık'
                        name='title'
                        variant='outlined'
                        className={classes.textField}
                        size='small'
                        error={errors.title?true:false}
                        fullWidth
                        inputRef={register}
                  />
                  <TextField
                     id='subTitle'
                     label='Alt Başlık'
                     name='subTitle'
                     variant='outlined'
                     className={classes.textField}
                     size='small'
                     error={errors.subTitle?true:false}
                     fullWidth
                     inputRef={register}
                  />
                  <Controller
                     as={
                        <Select
                          input={<Input/>}
                          className={classes.textField}
                          fullWidth
                        >
                           {
                              tags.map((item,inx)=>(
                                 <MenuItem key={inx} value={item}>
                                    {item}
                                 </MenuItem>
                              ))
                           }
                        </Select>
                     }
                     name='tag'
                     control={control}
                     error={errors.tag?true:false}
                     defaultValue={tags[0]}
                  />
                  <TextField
                     id='content'
                     label='İçerik'
                     name='content'
                     variant='outlined'
                     className={classes.textField}
                     size='small'
                     error={errors.content?true:false}
                     fullWidth
                     inputRef={register}
                     multiline
                     rows={4}
                  />
                  <FileBase64 multiple={false} onDone={({base64})=>SetFile(base64)}/>
               </form>
            </div>
         </DialogContent>
         <DialogActions>
            <Button color='inherit' onClick={clearForm}>Vazgeç</Button>
            <Button type='submit' variant='outlined' color='primary' onClick={()=>handleSubmit(onSubmit)()}>
              Yayınla
            </Button>
         </DialogActions>
      </Dialog>
   )
}
export default AddFormPost;
