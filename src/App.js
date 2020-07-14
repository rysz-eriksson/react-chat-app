import React from 'react';
import './App.css';
import MessageForm from './components/MessageForm';

class App extends React.Component {

  sendMessage = (text) => {
    console.log(text)
  }

  render() {
    return (
      <div>
        <MessageForm sendMessage={this.sendMessage} /> 
      </div>
    );
  }
}

// <MessageList />

export default App;
