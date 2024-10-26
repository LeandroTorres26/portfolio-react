import "./styles/_globals.scss";
import Nav from "./components/Nav/Nav.js";
import Home from "./pages/home/home.js";
import Projects from "./pages/projects/projects.js";
import Skills from "./pages/skills/skills.js";
import About from "./pages/about/about.js";
import Work from "./pages/work/work.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Nav />
        </header>
        <main>
          <AnimatePresence>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/projects" exact component={Projects}></Route>
              <Route path="/skills" component={Skills}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/work" component={Work}></Route>
            </Switch>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}

export default App;
