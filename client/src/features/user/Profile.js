import React from 'react'
import { Button } from 'semantic-ui-react'
import {Link} from "react-router-dom"

const Profile = (props) => {
    return (
        <div>
            <h1>User {props.routeProps.match.params.id}</h1>
            <h2>Username</h2>
            <h2>Email</h2>
            <h2>Units For Weight</h2>
            <h2>Quote Preference</h2>
            <Button as={Link} to="/user/current-user">Edit</Button>
        </div>
    )
}

export default Profile
