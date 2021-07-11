import {useEffect, useState} from "react";
import {getCommets} from "../../services/API";
import Comment from "../comment/Comment"
import {Route} from "react-router-dom";
import CommentsDetails from "../comment-details/CommentDetails"
export default function Comments() {
    let[comments, setComments]= useState([])
    useEffect(()=>{
        getCommets().then(value => {
            setComments(value.data)
        })
    })
        return(
            <div>
                {
                    comments.map(value => <Comment key={value.id} i/>)
                }
                <Route path={'/comments/:id'} component={CommentsDetails}/>
            </div>


            )
  }