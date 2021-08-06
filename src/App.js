import {createRef, useState} from "react";


function App() {
    let [usernameInputState, setUsernameInputState] = useState('asdasd')
    let onInputChange = (e) =>{
        console.log(e.target.value);
        setUsernameInputState(e.target.value)
    }
    return (
        <div>
            <form action={'/someUrl'} method={'post'}>
                <input type="text" name={'username'} value={usernameInputState} onChange={onInputChange}/>
                <button>save</button>

            </form>
        </div>
    )
}

export default App;
