import React from 'react';

export default ({ message }) => {
    return (
        <div>
            <p>{message.from}</p>
            <p>{message.time}</p>
            <p>{message.message}</p>
        </div>
    )
}