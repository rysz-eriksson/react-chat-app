import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { Smile } from 'react-feather';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: '50px'
    },
    input: {
        padding: '3px 10px'
    },
    button: {
        width: '60px'
    }
});

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

    const classes = useStyles();
        return (
            <form onSubmit={handleSubmit} className={classes.root}>
                {showEmojiPicker && <Picker 
                set="facebook"
                onSelect={(emoji) => {
                    setMessage(`${message}${emoji.native}`)
                }}
                />}
                <button 
                type="button"
                className={classes.button}
                onClick={() => {
                    setEmojiPicker(!showEmojiPicker)
                }}
                >
                    <Smile />
                  </button>
                <Input 
                placeholder='Type your message'
                value={message}
                onChange={handleChange}
                type="text"
                fullWidth
                color="secondary"
                className={classes.input}
                />
                <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<Icon>send</Icon>}
                type="submit"
              >Send</Button>
            </form>
        )
}