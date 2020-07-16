import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import MessageItem from './MessageItem';


export default ({ messages }) => {

        return (
            <ScrollToBottom>
                {messages.map(message => <MessageItem message={message} key={message.id} />)}
            </ScrollToBottom>
        )
}
