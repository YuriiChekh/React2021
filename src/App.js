import {Link, Router, Route} from "react-router-dom"



function App() {
  return (
      <Router>
        <div>
          <div><Link to="/users">users page</Link></div>
          <div><Link to="/posts">posts page</Link></div>
          <Route/>
        </div>
      </Router>
  );
}

export default App;
