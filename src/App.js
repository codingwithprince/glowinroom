import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import {BrowserRouter as Router,Route} from "react-router-dom";
import About from './pages/About/About';
import Skincare from './components/SkinCare/Skincare';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skincare" component={Skincare} />
      </Router>
      
    </div>
  );
}

export default App;
