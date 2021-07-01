import {useEffect, useState} from "react";
import {getPosts} from "./services/Appi";
import Posts from "./components/posts/Posts";


export default function App() {

    let[posts, setPosts]= useState([]);

    useEffect(()=>{
        getPosts().then(value =>{
            setPosts(value.data)
        })
    },[])
        return(
            <div>
              <Posts items={posts}/>
            </div>
            )
  }
