import { useEffect, useState} from "react";
import Form from "./form";


function App() {
    let [users, setUsers]= useState([])
    useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json())
                .then(value => {
                    setUsers([...value])
                })
    })

    return (
        <div>
          <Form users={users}/>

        </div>
    )
}

export default App;
