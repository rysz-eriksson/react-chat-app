import React from 'react';

export default class MessageForm extends React.Component {
    state = {
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendMessage(this.state.message);
        this.setState({
            message: ''
        });

    }
    render() {
        const { message } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                placeholder='Hit ENTER to send message'
                value={message}
                onChange={this.handleChange}
                type="text"
                />
            </form>
        )
    } 

}