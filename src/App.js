import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Users from "./components/users/Users"
import Posts from "./components/posts/Posts"
import Comments from "./components/comments/Comments"

function App() {
  return (
      <Router>
        <div>
          <div><Link to={'/users'}>Users page</Link></div>
          <div><Link to={'/posts'}>Posts page</Link></div>
          <div><Link to={'/comments'}>Comments page</Link></div>

          <hr/>

        </div>

        <Switch>
          <Route path={'/users'} component={Users}/>
          <Route path={'/posts'} component={Posts}/>
          <Route path={'/comments'} component={Comments}/>


        </Switch>
      </Router>
  );
}

export default App;
