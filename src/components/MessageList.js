import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { makeStyles } from '@material-ui/core/styles';
import MessageItem from './MessageItem';

const useStyles = makeStyles({
  root: {
    overflow: 'auto',
    width: '100%',
    paddingBottom: '30px',
    flex: '1 1 auto'
  },
  button: {
    backgroundColor: '#372549',
    opacity: '0.8',
    "&:hover": {
      backgroundColor: '#372549',
      opacity: '1'
    }
  }
});

export default ({ messages, nickname }) => {
    const classes = useStyles()
        return (
            <ScrollToBottom behavior='smooth' className={classes.root} followButtonClassName={classes.button}>
                {messages.map(message => {
                  if (nickname === message.from) {
                    return <MessageItem message={message} key={message.id} fromMe />
                  } else {
                    return <MessageItem message={message} key={message.id} />
                  }
                }
                  )}
            </ScrollToBottom>
        )
}
