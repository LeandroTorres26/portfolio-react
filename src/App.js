import './styles/_globals.scss';
import Nav from './components/nav/nav';
import Home from './pages/Home/Home';
import Projetos from './pages/Projects/Projects';
import Habilidades from './pages/Skills/Skills'
import Contato from './pages/Contact/Contact'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Projetos" component={Projetos}></Route>
          <Route path="/Habilidades" component={Habilidades}></Route>
          <Route path="/Contato" component={Contato}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
