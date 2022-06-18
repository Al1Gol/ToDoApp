import React from 'react'
import { Link } from 'react-router-dom'


const UserItem = ({user}) => {
    return (
        <tbody>
            <tr>
                <td><Link to={`/user/${user.id}/`}>{user.username}</Link></td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
            </tr>
        </tbody>
    )
}

const UserList = ({users}) => {
    return (
        <table>
            <thead>
                <th>
                    Username
                </th>
                <th>
                    Firstname
                </th>
                <th>
                    Lastname
                </th>
                <th>
                    Email
                </th>
            </thead>
            {users.map((user) => <UserItem user={user} />)}

        </table>
    )
}

export default UserList
