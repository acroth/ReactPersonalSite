//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Portfolio from './Pages/Portfolio'

function App() {
 /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/

  return ( 
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route path = '/' exact component={Home}/>
        <Route path = '/About' component={About}/>
        <Route path = '/Contact' component={Contact}/>
        <Route pate = '/Portfolio' component={Portfolio}/>
      </Switch>

    </Router>
    
    </>
    
  );
}

export default App;
