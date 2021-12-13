import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Home/Home";
import { Stock } from "./Stock/Stock";
import { Admin } from "./Admin/Admin";
import { useState } from "react";
// i will Import About Later
function App() {
  const [checked, setChecked]= useState(false);
  
  const ActivePage = ()=>{
    if(checked === true){
      // Set background green to prove that this link has been selected*
      
    }
  }
  return (
    <div className="app">
      <Router>
        <header>
          <div className="logo-container">
            <img className="logo" src="../logo.png" alt="" />
          </div>
          <div className="links-container">
            <Link className="nav-links" onClick={()=> setChecked(!checked)}  to="/Home">
              Home
            </Link>
            <Link className="nav-links" onClick={()=> setChecked(!checked)} to="/Stock">
              Stock
            </Link>
            <Link className="nav-links" onClick={()=> setChecked(!checked)} to="/Admin">
              Admin
            </Link>
            <Link className="nav-links" onClick={()=> setChecked(!checked)} to="/About">
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
      </Router>
    </div>
  );
}

export default App;
