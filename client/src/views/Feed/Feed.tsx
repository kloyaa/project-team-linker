import React, { useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/hooks'

function Feed() {
    const authentication = useTypedSelector(state => state.authentication);
    const { profile, isAuthenticated } = authentication;

    useEffect(() => {
        console.log(authentication)
    }, [isAuthenticated, authentication]);

    if(!profile || (profile === null)) {
        return <Redirect to="/profile/edit" />
    }
    return (
        <div>
            <h1>Welcome to feed</h1>
        </div>
    )
}

export default Feed
