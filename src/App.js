import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch> 
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch> 
      </BrowserRouter>
    </>
  );
}

export default App;
