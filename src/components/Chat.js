import React from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import Container from '@material-ui/core/Container';

class Chat extends React.Component {
  state = {
    messages: [],
    nickname: ''
  }

  socket = new WebSocket('ws://st-chat.shas.tel')

  componentDidMount() {
    const nickname = localStorage.getItem('nickname')
    this.setState(({ messages }) => {
      return {
        messages,
        nickname
      }
    })
    this.socket.onmessage = (e) => {
      const NewMessages = JSON.parse(e.data).sort((a, b) => {
        return a.time - b.time
      })
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
      from: this.state.nickname,
      message
  }))
  }

  render() {
    return (
      <div style={{ height: '50vh', width: '50vw'}}>
        <MessageList messages={this.state.messages}/>
        <MessageForm sendMessage={this.sendMessage} /> 
      </div>
    );
  }
}



export default Chat;
