import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";



function App() {
  return (
   <Router>
     <div>
       <div><Link to={'/'}>Home</Link></div>
       <div><Link to={'/users'}>Users</Link></div>
       <div><Link to={'/posts'}>Posts</Link></div>
       <div><Link to={'/comments'}>Comments</Link></div>
     </div>
        <Switch>
            <Route exact path={'/'} render ={()=> {
                return <h1>Home</h1>
            }} />
            <Route path={'/users'}>
                <Users />
            </Route>
            <Route path={'/posts'}>
                <Posts/>
            </Route>
            <Route path={'/comments'}>
                <Comments/>
            </Route>
        </Switch>
   </Router>
  );
}

export default App;
