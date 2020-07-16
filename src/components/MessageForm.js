import React, { useState } from 'react';
import { Smile } from 'react-feather';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

export default (props) => {
    
    const [message, setMessage] = useState('')
    const [showEmojiPicker, setEmojiPicker ] = useState(false)

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.sendMessage(message);
        setMessage('')
    }
        return (
            <form onSubmit={handleSubmit}>
                {showEmojiPicker && <Picker 
                set="facebook"
                onSelect={(emoji) => {
                    setMessage(`${message}${emoji.native}`)
                }}
                />}
                <button 
                type="button"
                onClick={() => {
                    setEmojiPicker(!showEmojiPicker)
                }}
                >
                    <Smile />
                  </button>
                <input 
                placeholder='Hit ENTER to send message'
                value={message}
                onChange={handleChange}
                type="text"
                />
            </form>
        )
}