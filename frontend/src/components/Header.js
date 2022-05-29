import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({header}) => {
    return (
        <header>
            <li><Link to='/'>Projects</Link></li>
            <li><Link to='/users/'>Users</Link></li>
            <li><Link to='/todo/'>Todo</Link></li>
            <li><Link to='/todo/create/'>New todo</Link></li>
            <li><Link to='/projects/create/'>New project</Link></li>
        </header>
    )
}

export default Menu