import { combineReducers } from "redux";
import postReducer from '../reducers/posts'

const rootReducer = combineReducers({ posts: postReducer });

export default rootReducer;
