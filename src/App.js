import "./App.css";
import { Nav } from "./Nav/Nav";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Home } from "./Home/Home";
import { Stock } from "./Stock/Stock";
import { Admin } from "./Admin/Admin";
// i will Import About Later
function App() {
  const date = new Date().toISOString();

  return (
    <div className="nav-app">
      <div>
        <Router>
          <nav>
            <div>
              <Nav />
              <Home />
              <Stock />
              <Admin />
              <Route path="/" component={Home} />
              <Route path="/Stock" component={Stock} />
              <Route path="/Admin" component={Admin} />
            </div>
          </nav>
        </Router>
      </div>
      <footer>{<time datetime={date}></time>}</footer>
    </div>
  );
}

export default App;
