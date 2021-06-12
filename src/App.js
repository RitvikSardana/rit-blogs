import Navbar from "./Navbar";
// import React from 'react'
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from "./CreateBlog";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/CreateBlog">
              <CreateBlog />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              {/* path = "*" means if none of the abovce address is matches go to NotFound file */}
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
// npm run start
// npx json-server --watch data/db.json --port 3069
export default App;
