import {useEffect, useState} from "react";
import {getUsers} from "../../services/API";
import User from "../user/User"
import UserDetails from "../user-details/UserDetails"
import {Switch, Route} from "react-router-dom";

export default function Users() {
    let [users, setUsers]=useState([])
    useEffect(()=>{
        getUsers().then(value => {
            setUsers([...value.data])
        })
    })
        return(
            <div>
                {
                    users.map(value => <User key={value.id} item={value}/> )
                }

                <Switch>
                    <Route path={'/users/:id'} component={UserDetails}/>
                </Switch>
            </div>
        )
  }