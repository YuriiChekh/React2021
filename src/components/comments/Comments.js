import {useEffect, useState} from "react";
import {getCommets} from "../../services/Api";
import Comment from "../comment/Comment";

export default function Comments() {
    let[comments, setComments]=useState([])
    useEffect(()=>{
        getCommets().then(value => {
            setComments(value.data)
        })
    })
        return(<div>
                {
                    comments.map(value => <Comment key={value.id} items={value}/>)
                }

            </div>
            )
  }