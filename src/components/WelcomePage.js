import React from 'react';
import { Redirect } from 'react-router-dom';


export default class WelcomePage extends React.Component {

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
        if (this.state.nickname) {
            return <Redirect to="/chat" />
        } else {
            return (
                <div>
                <h1>Welcome</h1>
                <form onSubmit={this.handleSignIn}>
                    <input 
                    name="nickname"
                    placeholder="please type your nickname"
                    type="text"
                    />
                <button type='submit'>Sign-in</button>
                </form>
            </div>
            )
        }
}}