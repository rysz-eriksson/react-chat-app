import React from 'react';
import './App.css';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList'

class App extends React.Component {
  state = {
    messages: []
  }

  socket = new WebSocket('ws://st-chat.shas.tel')

  componentDidMount() {
    this.socket.onmessage = (e) => {
      const NewMessages = JSON.parse(e.data).sort((a, b) => {
        return a.time - b.time
      })
      console.log(NewMessages)
      this.setState(({ messages }) =>
        {
        return {
          messages: messages.concat(NewMessages)
        }
      })
    }
  }

  sendMessage = (message) => {
    this.socket.send(JSON.stringify({
      from: 'Rysz',
      message
  }))
  }

  render() {
    return (
      <div>
        <MessageList messages={this.state.messages}/>
        <MessageForm sendMessage={this.sendMessage} /> 
      </div>
    );
  }
}



export default App;
