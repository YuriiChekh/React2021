import {useEffect, useState} from "react";
import {getPost, getPosts} from "./services/Appi";
import Posts from "./components/posts/Posts";


export default function App() {

    let[post, setPost]=useState(null)

    let[posts, setPosts]= useState([]);

    let selectPost = (id)=>{
        getPost(id).then(value => {
            setPost(value.data)
        })
    }

    useEffect(()=>{
        getPosts().then(value =>{
            setPosts(value.data)
        })
    },[])
        return(
            <div>
              <Posts items={posts} selectPost={selectPost}/>
                <hr/>
                {
                    post && <div>{post.body}</div>
                }
            </div>
            )
  }
