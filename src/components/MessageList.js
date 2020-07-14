import React from 'react';
import MessageItem from './MessageItem';

export default ({ messages }) => {
    return (
        <div>
        {messages.map(message => <MessageItem message={message} key={message.id} />)}
        </div>
    )
}