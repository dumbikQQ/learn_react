import React from "react";
import a from "./Post.module.css"
const Post = (props) => {
    return(
       <div className={a.windowPost} >    
           <p>{props.autor} {props.content}</p>
           <span>{props.likes}</span>
       </div>
    )
}
export default Post;