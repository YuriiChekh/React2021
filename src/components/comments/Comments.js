import {useEffect, useState} from "react";
import {getComments} from "../../services/API";
import Comment from "../comment/Comment"
import {Route} from "react-router-dom";
import CommentsDetails from "../comment-details/CommentDetails"
export default function Comments() {
    let[comments, setComments]= useState([])
    useEffect(()=>{
        getComments().then(value => {
            setComments(value.data)
        })
    })
        return(
            <div>
                {
                    comments.map(value => <Comment key={value.id} item={value}/>)
                }
                <Route path={'/comments/:id'} component={CommentsDetails}/>
            </div>


            )
  }