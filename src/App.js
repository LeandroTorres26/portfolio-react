import "./styles/_globals.scss";
import Nav from "./components/Nav/Nav";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import Myp from "./pages/projects/myp";
import Delt from "./pages/projects/delt";
import Organic from "./pages/projects/organic";
import Skills from "./pages/skills/skills";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
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
              <Route path="/projects/myp" component={Myp}></Route>
              <Route path="/projects/delt" component={Delt}></Route>
              <Route path="/projects/organic" component={Organic}></Route>
              <Route path="/skills" component={Skills}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/contact" component={Contact}></Route>
            </Switch>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}

export default App;
