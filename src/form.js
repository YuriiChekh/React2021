import {useState} from "react";

export default function Form({users}) {
    let [user, setUser]= useState({})
    let userChoose = (e) =>{
        console.log('user choose');
        let user_id = e.target.value
        console.log(user_id);
        let find =users.find(user=> user.id === user_id)
        setUser(find)

    }
        return (
            <div>
                <form onSubmit={userChoose}>
                    <select value={user} onChange={userChoose}>
                        {
                          users.map(value => <option value={value.id}>{value.name}</option>    )
                        }

                    </select>
                </form>
            </div>
        )

  }