import {useEffect, useState} from "react";

export default  function Users(){


 let [userList, setUserList] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                console.log(value);
               setUserList(value);

            });
    },[]);

    return(
        <div>
            {
              userList.map(value => <div>dfsdf</div>)
            }
        </div>
    )
}