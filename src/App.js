



import {useEffect, useState} from "react";
import {getUsers, getUser} from "./services/Appi";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";


export default function App() {
    let[users,setUsers] = useState([]);

    let[userDetails, setUserDetails]= useState(null)

    useEffect(() => {
        getUsers().then(response => {
            setUsers(response.data);
        })
    },[])

    function selectUser(id){
        console.log(id);
        getUser(id).then(({data})=>{
          setUserDetails(data)
        })
    }
    return(
        <div>
            <Users  items={users} selectuser={selectUser}/>
            <hr/>
            {
                userDetails && <UserDetails item={userDetails}/>
            }

        </div>
    );

};