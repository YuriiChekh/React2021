import {useEffect, useState} from "react";
import {getPosts} from "../../services/API";
import Post from "../post/Post"
import { Route} from "react-router-dom";
import PostDetails from "../posts-details/PostDetails"
export default function Posts() {
    let[posts, setPosts]=useState([])
    useEffect(()=>{
        getPosts().then(value => {
            setPosts([...value.data])
        })
    })
        return(
            <div>
                {
                    posts.map(value => <Post key={value.id} items={value}/>)
                }
                <hr/>


                    <Route path={'/post/:id'} component={PostDetails}/>

            </div>
            )
  }