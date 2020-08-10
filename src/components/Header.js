import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#372549',
        color: '#fff',
        borderRadius: '9px 9px 0 0'
    },
    title: {
        padding: '10px 20px'
    },
    link: {
        fontSize: '1.125rem',
        lineHeight: '2.125',
        padding: '10px 20px',
        textDecoration: 'none',
        color: '#fff'
    }
});

export default ({ nickname, handleSignOut }) => {
    const classes = useStyles()
    return (
        <Grid
        container
        justify='space-between'
        color='secondary'
        className={classes.root}
        >
        <Typography 
        variant="h5"
        className={classes.title}
        >Hello, {nickname}</Typography>
        <Link 
        to='/' 
        onClick={handleSignOut}
        className={classes.link}
        >X</Link>
        </Grid>
    )
}


