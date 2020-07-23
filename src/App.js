import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Chat from './components/Chat';
import WelcomePage from './components/WelcomePage'
import './App.css';


class App extends React.Component {

  render() {
    return (
      <Router>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/chat" component={Chat} />
      </Router>
    );
  }
}

export default App;
