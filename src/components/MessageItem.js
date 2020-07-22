import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        
    },
    avatar: {
        margin: '0.5em'
    },
    messageItem: {
        width: '90%'
    },
    span: {
        marginRight: '0.5em'
    },
    paragraph: {
        wordWrap: 'break-word',
        width: 'fit-content',
        maxWidth: '100%',
        backgroundColor: 'lightgray',
        padding: '5px 10px',
        borderRadius: '10px'
    },
    fromMe: {
        backgroundColor: '#372549'
    }
})

export default ({ message, fromMe }) => {

    const displayTime = () => {
        const now = moment()
        if (moment(message.time).isSame(now, 'day')) {
            return moment(message.time).format('[Today at] H:mm')
        } else if (moment(message.time).isBefore(now, 'day') && moment(message.time).isAfter(now.subtract(7, 'day'))) {
            return moment(message.time).format('dddd H:mm')
        } else {
            return moment(message.time).format('Do MMMM YYYY H:mm')
        }
    }
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Avatar className={`${classes.avatar} ${fromMe ? classes.fromMe : ''}`}>{message.from.slice(0,1).toUpperCase()}</Avatar>
            <div className={classes.messageItem}>
                <span className={classes.span}>{message.from}</span>
                <span className={classes.span}>{displayTime()}</span>
                <p className={classes.paragraph}>{message.message}</p>
            </div>
        </div>
    )
}