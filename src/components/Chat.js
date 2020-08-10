import React, { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import Header from './Header';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { sound, playSound } from '../services/sound'

const useStyles = makeStyles({
  root: {
    width: '30vw',
    minWidth: '300px',
    minHeight: '450px',
    height: '45vw',
    borderRadius: '10px',
    backgroundColor: '#fafafa',
    display: 'flex',
    flexDirection: 'column',
  }
});

let socket = undefined

const connect = () => {
  if (!socket || socket.readyState === 3) {
        socket = new WebSocket('ws://st-chat.shas.tel')
        socket.id = uuidv4()
        console.log(socket.id)
    }
}
export default () => {

  const [messages, setMessages] = useState([]);
  const [nickname, setNickname] = useState('');
  const [errorMessage, setErrMess] = useState('');
  const [hidden, setHidden] = useState(false);
  const [count, setCount] = useState(0);

  const visibilityListener = useCallback((event) => {
    setHidden(event.target.hidden);
    if (!hidden) {
    setCount(0);
    document.title = 'Chat App';
    }
  }, [])

const messageListener = useCallback((event) => {
  if (hidden) {
    setCount(count + JSON.parse(event.data).length)
    document.title = `(${count + 1}) You have new messages`;
    playSound(sound);
      };
      setErrMess('')
      const newMessages = JSON.parse(event.data).sort((a, b) => {
        return a.time - b.time
      })
      setMessages(messages.concat(newMessages))
  }, [hidden, count, messages]);

  const errorListener = useCallback(() => {
      socket.close()
    }, [])

    const closeListener = useCallback(() => {
      setMessages([]);
      setErrMess('Lost connection with server. Re-connecting. Restart app if nothing changes')
      socket = null;
      setTimeout(connect(), 1000) 
      }, [])
  
  
  useEffect(() => {
    setNickname(localStorage.getItem('nickname'));
  }, [nickname])

  useEffect(() => {
      document.addEventListener('visibilitychange', visibilityListener)
      return (() => {
        document.removeEventListener('visibilitychange', visibilityListener)
      })
  }, [visibilityListener])


  useEffect(() => {
  connect()
  socket.addEventListener('message', messageListener);
  socket.addEventListener('error', errorListener)
  socket.addEventListener('close', closeListener)
  console.log(socket.id)

  return () => {
    socket.removeEventListener('message', messageListener);
    socket.removeEventListener('error', errorListener)
    socket.removeEventListener('close', closeListener)
  }

  }, [messageListener, errorListener, closeListener])

  const sendMessage = (message) => {
    socket.send(JSON.stringify({
      from: nickname,
      message
  }));
  console.log(socket.id)
  }

  const handleSignOut = () => {
  localStorage.removeItem('nickname')
  socket.close();
  }

  const classes = useStyles()
    return (
      <div className={classes.root}>
        <Header nickname={nickname} handleSignOut={handleSignOut}/>
        <MessageList messages={messages} nickname={nickname} />
        {errorMessage && 
          <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {errorMessage}
          </Alert>}
        <MessageForm sendMessage={sendMessage} /> 
      </div>
    );
};
