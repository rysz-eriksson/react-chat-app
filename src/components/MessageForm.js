import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Smile } from 'react-feather';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

const useStyles = makeStyles({
    root: {
        position: 'relative',
    },
    form: {
        display: 'flex',
        height: '50px',
        backgroundColor: '#fafafa',
    },
    input: {
        padding: '3px 10px'
    },
    button: {
        width: '60px'
    },
    picker: {
        position: 'absolute',
        bottom: '55px',
        left: '5px',
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
        <div className={classes.root}>
            <form onSubmit={handleSubmit} className={classes.form}>
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
                type="submit"
              >Send</Button>
            </form>
            <div className={classes.picker}>
            {showEmojiPicker && <Picker 
                set="facebook"
                style={{ display: 'flex', flexDirection: 'column-reverse' }}
                emojiSize={18}
                showPreview={false}
                showSkinTones={false}
                onSelect={(emoji) => {
                    setMessage(`${message}${emoji.native}`)
                }}
                />}
            </div>
        </div>
        )
}