import {useReducer} from "react";

function reducer(state, action) {
    switch (action.type) {
        case'Inc A':
            return{...state, a: state.a + action.payload};
        default:
            return {...state}
    }
}


export default function App() {
    let [state, dispatch]=useReducer(reducer,{a:0, b:0})
        return(
            <div>
              <button onClick={()=>dispatch({type:'Inc A', payload:1})}> click me A {state.a} -</button>
              <button> inc B {state.b} </button>
            </div>
            )
  }
