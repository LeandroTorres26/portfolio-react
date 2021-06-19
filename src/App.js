import "./styles/_globals.scss";
import Nav from "./components/Nav/Nav.js";
import Home from "./pages/home/home.js";
import Projects from "./pages/projects/projects.js";
import Myp from "./pages/projects/myp.js";
import Delt from "./pages/projects/delt.js";
import Organic from "./pages/projects/organic.js";
import Skills from "./pages/skills/skills.js";
import About from "./pages/about/about.js";
import Contact from "./pages/contact/contact.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
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
