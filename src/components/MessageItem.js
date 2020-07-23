import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        marginTop: '1rem'
    },
    avatar: {
        margin: '0.5rem'
    },
    messageItem: {
        width: '85%'
    },
    span: {
        marginRight: '0.5rem',
    },
    paragraph: {
        wordWrap: 'break-word',
        width: 'fit-content',
        maxWidth: '100%',
        backgroundColor: '#E8E8E8',
        padding: '5px 10px',
        borderRadius: '10px'
    },
    fmContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end'
    },
    fmAvatar: {
        backgroundColor: 'rgb(49, 45, 60)'
    },
    fmParapraph: {
        color: '#fff',
        backgroundColor: 'rgb(49, 45, 60)',
        margin: '0 0 0 auto',
        textAlign: 'left'
    },
    fmMessageItem: {
        textAlign: 'end',
        marginLeft: '10px'
    },
    fmSpan: {
        marginLeft: '0.5rem',
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
        <div className={`${classes.container} ${fromMe ? classes.fmContainer : ''}`}>
            <Avatar className={`${classes.avatar} ${fromMe ? classes.fmAvatar : ''}`}>{message.from.slice(0,1).toUpperCase()}</Avatar>
            <div className={`${classes.messageItem} ${fromMe ? classes.fmMessageItem : ''}`}>
                <Typography variant='caption' component='span' className={classes.span}>{message.from}</Typography>
                <Typography variant='caption' component='span' className={`${fromMe ? classes.fmSpan : classes.span}`}>{displayTime()}</Typography>
                <Typography variant='body1' component='p' className={`${classes.paragraph} ${fromMe ? classes.fmParapraph : ''}`}>{message.message}</Typography>
            </div>
        </div>
    )
}