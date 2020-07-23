import React from 'react';
import { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        margin: '10px'
    },
    element: {
        width: '100%',
        margin: '10px auto'
    }
  });

class WelcomePage extends React.Component {

    state = {
        nickname: ''
    }

    componentDidMount() {
        const nickname = localStorage.getItem('nickname')
        this.setState({
          nickname
        })
      }


    handleSignIn = (e) => {
        e.preventDefault();
        this.setState({nickname: e.target.nickname.value})
        localStorage.setItem('nickname', e.target.nickname.value)
    }

    render() {
        const { classes } = this.props;
        if (this.state.nickname) {
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
                <form onSubmit={this.handleSignIn}>
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
}}

export default withStyles(styles)(WelcomePage);