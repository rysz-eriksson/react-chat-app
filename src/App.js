import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Chat from './components/Chat';
import WelcomePage from './components/WelcomePage'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#FEECD0'
  }
});

const App = () => {
  const classes = useStyles();
    return (
      <div className={classes.root}>
        <Router>
          <Route path="/" exact component={WelcomePage} />
          <Route path="/chat" component={Chat} />
        </Router>
      </div>
    );
}

export default App;
