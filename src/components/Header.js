import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

export default ({ nickname }) => {

    const handleSignOut = () => {
        localStorage.removeItem('nickname')
    }

    return (
        <div>
        <Typography variant="h4">Hello {nickname}</Typography>
        <Link to='/' onClick={handleSignOut}>X</Link>
        </div>
    )
}


