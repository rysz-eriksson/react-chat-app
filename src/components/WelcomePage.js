import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    container: {
        margin: '10px'
    },
    element: {
        width: '100%',
        margin: '10px auto'
    }
  });

export default () => {

    const [nickname, setNickname] = useState('')

    useEffect(() => {
        setNickname(localStorage.getItem('nickname'))
    }, [])


    const handleSignIn = (e) => {
        e.preventDefault();
        setNickname(e.target.nickname.value)
        localStorage.setItem('nickname', e.target.nickname.value)
    }

        const classes = useStyles()
        if (nickname) {
            return <Redirect to="/chat" />
        } else {
            return (
                <div className={classes.container}>
                <Typography 
                variant='h4' 
                color='secondary' 
                className={classes.element}
                >Welcome</Typography>
                <Typography
                variant='body1' 
                component='p'
                className={classes.element}
                >to the chat app build with React, Material-UI and websocket server
                </Typography>
                <form onSubmit={handleSignIn}>
                    <Input 
                    name="nickname"
                    placeholder="please type your nickname"
                    type="text"
                    fullWidth
                    className={classes.element}
                    />
                <Button 
                type='submit'
                variant="contained"
                color="secondary"
                className={classes.element}
                >Sign-in</Button>
                </form>
            </div>
            )
        }
    }
