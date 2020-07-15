import React from 'react';
import ReactDOM from 'react-dom';
import MessageItem from './MessageItem';

export default class MessageList extends React.Component {

    render() {
        const { messages } = this.props
        return (
            <div>
            {messages.map(message => <MessageItem message={message} key={message.id} />)}
            </div>
        )
    }
}