import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import About from './components/About/About';
import Skincare from './components/SkinCare/Skincare';
import Footer from './components/Footer/Footer';
import Hairstyle from './components/Hairstyle/Hairstyle';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/skincare" component={Skincare} />
            <Route exact path="/hairstyle" component={Hairstyle} />
          </Switch>
          <Footer />
      </Router>
      
    </div>
  );
}

export default App;
