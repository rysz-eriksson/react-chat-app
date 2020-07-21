import React from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import { Alert, AlertTitle } from '@material-ui/lab';
import { sound, playSound } from '../services/sound'

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.socket = null
    this.reTryInterval = 1000
  }
  state = {
    messages: [],
    nickname: '',
    errorMessage: '',
    hidden: false,
    count: 0
  }

  connect = () => {
    this.socket = new WebSocket('ws://st-chat.shas.tel');
    this.socket.onmessage = (e) => {
       if (this.state.hidden) {
         this.setState(({ count }) => {
           return {
             count: count + JSON.parse(e.data).length
           }
         })
        document.title = `(${this.state.count}) You have new messages`;
        playSound(sound)

       } else {
         this.setState({ count: 0 })
         document.title = 'React App'
       }
      this.setState({errorMessage: ''})
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

    const check = () => {
      
      if (!this.socket || this.socket.readyState === 3) this.connect();
  };
    this.socket.onerror = (e) => {
      this.socket.close()
    };

    this.socket.onclose = (e) => {
      this.setState({messages: []})
      this.setState({errorMessage: 'Lost connection with server. Re-connecting. Restart app if nothing changes'})
      setTimeout(check(), this.reTryInterval) 
    }

  }


  componentDidMount() {
    const nickname = localStorage.getItem('nickname')
    this.setState(({ messages }) => {
      return {
        messages,
        nickname
      }
    })

    document.addEventListener('visibilitychange', (e) => {
      this.setState({ hidden: e.target.hidden })
    })

    this.connect();
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
        {this.state.errorMessage && 
          <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {this.state.errorMessage}
          </Alert>}
        <MessageForm sendMessage={this.sendMessage} /> 
      </div>
    );
  }
}



export default Chat;
