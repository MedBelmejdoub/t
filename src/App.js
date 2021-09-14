import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Home/Home";
import { Stock } from "./Stock/Stock";
import { Admin } from "./Admin/Admin";
// i will Import About Later
function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <div className="logo-container">
            <img className="logo" src="../logo.png" alt="" />
          </div>
          <div className="links-container">
            <Link className="nav-links" to="/Home">
              Home
            </Link>
            <Link className="nav-links" to="/Stock">
              Stock
            </Link>
            <Link className="nav-links" to="/Admin">
              Admin
            </Link>
            <Link className="nav-links" to="/About">
              About
            </Link>
          </div>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Stock" component={Stock} />
            <Route path="/Admin" component={Admin} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
