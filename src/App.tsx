import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Top from './components/Top';
import Slide from './components/Slide';

class App extends React.Component<{}, {}>{
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Top}/>
            <Route exact path="/slide" component={Slide}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
