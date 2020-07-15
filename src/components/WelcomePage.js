import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default () => {
    const [name, setName] = useState('');

    const handleSignIn = () => {
        localStorage.setItem('nickname', name)
    }

    return (
        <div>
            <h1>Welcome</h1>
            <input 
            placeholder="please type your nickname"
            type="text"
            onChange={(event) => setName(event.target.value)}
            />
            <Link to='/chat' onClick={handleSignIn}>
                <button type="submit">Sign-in</button>
            </Link>
        </div>
    )
}