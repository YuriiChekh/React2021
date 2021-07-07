import {getPosts} from "../../services/Api";
import Post from "../post/Post";
import {useEffect, useState} from "react";

export default function Posts() {
    let[posts, setPosts]=useState([])

    useEffect(()=>{
        getPosts().then(value =>{
            setPosts(value.data)
        } )
    })

        return(
            <div>
                {
                    posts.map(value => <Post key={value.id} item={value}/>)
                }
            </div>
            )
  }